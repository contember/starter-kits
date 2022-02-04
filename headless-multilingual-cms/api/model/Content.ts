import { SchemaDefinition as def } from '@contember/schema-definition'
import { Link } from './Link'

export class Content {
	parts: def.OneHasManyDefinition = def.oneHasMany(ContentPart, 'content').orderBy('order')
}

export class ContentPart {
	content = def.manyHasOne(Content, 'parts').cascadeOnDelete().notNull()
	order = def.intColumn().notNull()
	json = def.stringColumn().notNull()
	references: def.OneHasManyDefinition = def.oneHasMany(ContentReference, 'contentPart')
}

export const ContentReferenceType = def.createEnum(
	'link'
)

export class ContentReference {
	contentPart = def.manyHasOne(ContentPart, 'references').cascadeOnDelete().notNull();
	type = def.enumColumn(ContentReferenceType).notNull()
	link = def.manyHasOne(Link)
}
