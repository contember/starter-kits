import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Locale } from './Locale'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	read: true
})
export class Setting {
	unique = def.enumColumn(def.createEnum('One')).notNull().unique()
	locales = def.oneHasMany(SettingLocale, 'base')
	logo = def.manyHasOne(Image).setNullOnDelete()
}

@acl.allow(publicRole, {
	when: { base: acl.canRead('locales') },
	read: true
})
@def.Unique('base', 'locale')
export class SettingLocale {
	base = def.manyHasOne(Setting, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'setting').notNull().cascadeOnDelete()

	footerCopyright = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
}
