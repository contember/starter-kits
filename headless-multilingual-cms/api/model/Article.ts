import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Locale } from './Locale'
import { Seo } from './Seo'

export class Article {
	locales = def.oneHasMany(ArticleLocale, 'root')
	publishAt = def.dateTimeColumn()
}


@def.Unique('root', 'locale')
export class ArticleLocale {
	root = def.manyHasOne(Article, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'authors').cascadeOnDelete().notNull()

	coverPhoto = def.manyHasOne(Image)
	headline = def.stringColumn()
	perex = def.stringColumn()
	slug = def.stringColumn().notNull().unique()
	linkedFrom = def.oneHasMany(Link, 'article')
	content = def.oneHasOne(Content).cascadeOnDelete()
	seo = def.oneHasOne(Seo, 'article').cascadeOnDelete()
}
