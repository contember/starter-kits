import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { ArticleLocale } from './Article'
import { ImageLocale } from './Image'
import { MenuLocale } from './Menu'
import { PageLocale } from './Page'
import { SettingLocale } from './Setting'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	when: { 
		or: [
			{ articles: acl.canRead('locale') },
			{ pages: acl.canRead('locale') },
			{ menus: acl.canRead('locale') },
			{ setting: acl.canRead('locale') },
			{ images: acl.canRead('locale') },
		]
	 },
	 read: true,
})
@def.Unique('code')
export class Locale {
	code = def.stringColumn().notNull()
	label = def.stringColumn()

	articles = def.oneHasMany(ArticleLocale, 'locale')
	pages = def.oneHasMany(PageLocale, 'locale')
	menus = def.oneHasMany(MenuLocale, 'locale')
	setting = def.oneHasMany(SettingLocale, 'locale')
	images = def.oneHasMany(ImageLocale, 'locale')
}
