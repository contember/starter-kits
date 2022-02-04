import { SchemaDefinition as def } from '@contember/schema-definition'
import { Locale } from './Locale'

export class Image {
	locales = def.oneHasMany(ImageLocale, 'root')
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
}

@def.Unique('root', 'locale')
export class ImageLocale {
	root: def.ManyHasOneDefinition = def.manyHasOne(Image, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'images').cascadeOnDelete().notNull()
	
	alt = def.stringColumn()
}
