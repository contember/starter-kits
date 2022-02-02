import { SchemaDefinition as def } from '@contember/schema-definition'
import { ArticleLocale } from './Article'
import { PageLocale } from './Page'

export const LinkEnum = def.createEnum('url', 'article', 'page')

export class Link {
	type = def.enumColumn(LinkEnum).notNull()
	url = def.stringColumn()
	article = def.manyHasOne(ArticleLocale, 'linkedFrom').setNullOnDelete()
	page = def.manyHasOne(PageLocale, 'linkedFrom').setNullOnDelete()
}
