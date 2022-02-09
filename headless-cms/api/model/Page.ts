import { SchemaDefinition as def } from '@contember/schema-definition'
import { ContentBlock } from './ContentBlock'
import { Link } from './Link'
import { Seo } from './Seo'

export const PageTypeEnum = def.createEnum('homePage', 'blogPage', 'error404Page')

export class Page {
	publishAt = def.dateTimeColumn().default('now')
	slug = def.stringColumn().unique()
	role = def.enumColumn(PageTypeEnum).unique().nullable()
	linkedFrom = def.oneHasMany(Link, 'page')
	blocks = def.oneHasMany(ContentBlock, 'page').orderBy('order')
	seo = def.oneHasOne(Seo, 'page').notNull().removeOrphan()
}
