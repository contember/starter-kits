import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Locale } from './Locale'

export class Setting {
	unique = def.enumColumn(def.createEnum('One')).notNull().unique()
	locales = def.oneHasMany(SettingLocale, 'root')
	logo = def.manyHasOne(Image)
}

@def.Unique('root', 'locale')
export class SettingLocale {
	root: def.ManyHasOneDefinition = def.manyHasOne(Setting, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'setting').cascadeOnDelete().notNull()

	footerCopyright = def.oneHasOne(Content).cascadeOnDelete()
}
