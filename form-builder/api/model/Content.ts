import { SchemaDefinition as def } from '@contember/schema-definition'

export class Content {
	parts = def.oneHasMany(ContentPart, 'content').orderBy('order')
}

export class ContentPart {
	order = def.intColumn().notNull()
	content = def.manyHasOne(Content, 'parts').notNull().cascadeOnDelete()
	json = def.stringColumn().notNull()
	references = def.oneHasMany(ContentReference, 'contentPart')
}

export class ContentReference {
	contentPart = def.manyHasOne(ContentPart, 'references').notNull().cascadeOnDelete()
}
