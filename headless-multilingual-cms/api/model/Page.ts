import { SchemaDefinition as def } from '@contember/schema-definition'
import { ContentBlock } from './ContentBlock'
import { Link } from './Link'
import { Locale } from './Locale'
import { Seo } from './Seo'

export const PageTypeEnum = def.createEnum('homePage', 'blogPage', 'error404Page')

export class Page {
	locales = def.oneHasMany(PageLocale, 'base')
	role = def.enumColumn(PageTypeEnum).unique().nullable()
}

@def.Unique('base', 'locale')
export class PageLocale {
	base = def.manyHasOne(Page, 'locales').notNull().cascadeOnDelete()

	publishAt = def.dateTimeColumn().default('now')
	slug = def.stringColumn()
	linkedFrom = def.oneHasMany(Link, 'page')
	blocks = def.oneHasMany(ContentBlock, 'page').orderBy('order')
	seo = def.oneHasOne(Seo, 'page').cascadeOnDelete()
}
