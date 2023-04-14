import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Link } from './Link'
import { publicRole } from './acl'
import { Article } from './Article'
import { ContentBlock } from './ContentBlock'

@acl.allow(publicRole, {
	when: { 
		or: [
			{ article: acl.canRead('content') },
			{ contentBlock: acl.canRead('content') },
		],
	 },
	read: true,
})
export class Content {
	parts = def.oneHasMany(ContentPart, 'content').orderBy('order')

	article = def.oneHasOneInverse(Article, 'content')
	contentBlock = def.oneHasOneInverse(ContentBlock, 'content')
}

@acl.allow(publicRole, {
	when: { content: acl.canRead('parts') },
	read: true,
})
export class ContentPart {
	order = def.intColumn().notNull()
	content = def.manyHasOne(Content, 'parts').notNull().cascadeOnDelete()
	json = def.stringColumn().notNull()
	references = def.oneHasMany(ContentReference, 'contentPart')
}

export const ContentReferenceType = def.createEnum(
	'link'
)

@acl.allow(publicRole, {
	when: { contentPart: acl.canRead('references') },
	read: true,
})
export class ContentReference {
	contentPart = def.manyHasOne(ContentPart, 'references').notNull().cascadeOnDelete()
	type = def.enumColumn(ContentReferenceType).notNull()
	target = def.oneHasOne(Link).removeOrphan().setNullOnDelete()
}
