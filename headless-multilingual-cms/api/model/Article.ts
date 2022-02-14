import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Locale } from './Locale'
import { Seo } from './Seo'

export class Article {
	locales = def.oneHasMany(ArticleLocale, 'base')
	coverPhoto = def.manyHasOne(Image).setNullOnDelete()
}

@def.Unique('base', 'locale')
@def.Unique('locale', 'slug')
export class ArticleLocale {
	base = def.manyHasOne(Article, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'articles').notNull().cascadeOnDelete()

	publishAt = def.dateTimeColumn()
	headline = def.stringColumn().notNull()
	lead = def.stringColumn()
	slug = def.stringColumn().notNull()
	linkedFrom = def.oneHasMany(Link, 'article')
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	seo = def.oneHasOne(Seo, 'article').notNull().removeOrphan()
}
