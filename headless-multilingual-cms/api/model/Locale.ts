import { SchemaDefinition as def } from '@contember/schema-definition'
import { ArticleLocale } from './Article'
import { MenuLocale } from './Menu'
import { PageLocale } from './Page'

@def.Unique('code')
export class Locale {
	code = def.stringColumn().notNull()
	label = def.stringColumn()

	articles = def.oneHasMany(ArticleLocale, 'locale')
	pages = def.oneHasMany(PageLocale, 'locale')
	menus = def.oneHasMany(MenuLocale, 'locale')
}
