import { ContentBlock, Link, Seo } from '.'
import { SchemaDefinition as def } from '@contember/schema-definition'

export const PageTypeEnum = def.createEnum('homePage', 'blogPage', 'error404Page')

export class Page {
	publishAt = def.dateTimeColumn().default('now')
	slug = def.stringColumn().unique()
	role = def.enumColumn(PageTypeEnum).unique().nullable()
	linkedFrom = def.oneHasMany(Link, 'page')
	blocks = def.oneHasMany(ContentBlock, 'page')
	seo = def.oneHasOne(Seo, 'page').cascadeOnDelete()
}
