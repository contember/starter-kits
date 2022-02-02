import { SchemaDefinition as def } from '@contember/schema-definition'
import { ArticleLocale } from './Article'
import { PageLocale } from './Page'

@def.Unique('code')
export class Locale {
	code = def.stringColumn().notNull()
	label = def.stringColumn()

	articles = def.oneHasMany(ArticleLocale, 'locale')
	pages = def.oneHasMany(PageLocale, 'locale')
}
