import { SchemaDefinition as def } from '@contember/schema-definition'
import { Image } from '.'

export class Seo {
	title = def.stringColumn()
	description = def.stringColumn()
	ogTitle = def.stringColumn()
	ogDescription = def.stringColumn()
	ogImage = def.oneHasOne(Image).cascadeOnDelete()
}
