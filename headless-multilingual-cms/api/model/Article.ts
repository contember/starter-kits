import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Locale } from './Locale'
import { Seo } from './Seo'

export class Article {
	locales = def.oneHasMany(ArticleLocale, 'root')
	coverPhoto = def.manyHasOne(Image)
}

@def.Unique('root', 'locale')
@def.Unique('slug', 'locale')
export class ArticleLocale {
	root: def.ManyHasOneDefinition = def.manyHasOne(Article, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'articles').cascadeOnDelete().notNull()

	publishAt = def.dateTimeColumn()
	headline = def.stringColumn().notNull()
	perex = def.stringColumn()
	slug = def.stringColumn().notNull()
	linkedFrom = def.oneHasMany(Link, 'article')
	content = def.oneHasOne(Content).cascadeOnDelete()
	seo = def.oneHasOne(Seo, 'article').cascadeOnDelete()
}
