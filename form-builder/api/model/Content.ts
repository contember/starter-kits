import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	read: true,
})
export class Content {
	parts = def.oneHasMany(ContentPart, 'content').orderBy('order')
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

@acl.allow(publicRole, {
	when: { contentPart: acl.canRead('references') },
	read: true,
})
export class ContentReference {
	contentPart = def.manyHasOne(ContentPart, 'references').notNull().cascadeOnDelete()
}
