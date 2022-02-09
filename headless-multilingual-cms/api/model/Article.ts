import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Locale } from './Locale'
import { Seo } from './Seo'

export class Article {
	locales = def.oneHasMany(ArticleLocale, 'base')
}

@def.Unique('base', 'locale')
@def.Unique('locale', 'slug')
export class ArticleLocale {
	base = def.manyHasOne(Article, 'locales').notNull().cascadeOnDelete()

	publishAt = def.dateTimeColumn()
	headline = def.stringColumn().notNull()
	lead = def.stringColumn()
	slug = def.stringColumn().notNull()
	linkedFrom = def.oneHasMany(Link, 'article')
	content = def.oneHasOne(Content).cascadeOnDelete()
	seo = def.oneHasOne(Seo, 'article').cascadeOnDelete()
}
