import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Locale } from './Locale'
import { Seo } from './Seo'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	when: { locales: acl.canRead('base') },
	read: true,
})
export class Article {
	locales = def.oneHasMany(ArticleLocale, 'base')
	coverPhoto = def.manyHasOne(Image).setNullOnDelete()
}

@acl.allow(publicRole, {
	when: { publishAt: { lte: 'now' } },
	read: true,
})
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
