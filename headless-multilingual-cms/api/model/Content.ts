import { SchemaDefinition as def } from '@contember/schema-definition'
import { Link } from './Link'

export class Content {
	parts = def.oneHasMany(ContentPart, 'content').orderBy('order')
}

export class ContentPart {
	order = def.intColumn().notNull()
	content = def.manyHasOne(Content, 'parts').notNull().cascadeOnDelete()
	json = def.stringColumn().notNull()
	references = def.oneHasMany(ContentReference, 'contentPart')
}

export const ContentReferenceType = def.createEnum(
	'link'
)

export class ContentReference {
	contentPart = def.manyHasOne(ContentPart, 'references').notNull().cascadeOnDelete()
	type = def.enumColumn(ContentReferenceType).notNull()
	target = def.oneHasOne(Link).removeOrphan().setNullOnDelete()
}
