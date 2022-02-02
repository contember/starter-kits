import { SchemaDefinition as def } from '@contember/schema-definition'
import { Article } from './Article'
import { Page } from './Page'

export const LinkEnum = def.createEnum('url', 'article', 'page')

export class Link {
	type = def.enumColumn(LinkEnum).notNull()
	url = def.stringColumn()
	article = def.manyHasOne(Article, 'linkedFrom').setNullOnDelete()
	page = def.manyHasOne(Page, 'linkedFrom').setNullOnDelete()
}
