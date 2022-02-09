import { SchemaDefinition as def } from '@contember/schema-definition'
import { Locale } from './Locale'

export class Image {
	locales = def.oneHasMany(ImageLocale, 'base')
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
}

@def.Unique('base', 'locale')
export class ImageLocale {
	base = def.manyHasOne(Image, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'images').notNull().cascadeOnDelete()
	
	alt = def.stringColumn()
}
