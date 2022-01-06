import { Content, Link, Seo } from '.'
import { SchemaDefinition as def } from '@contember/schema-definition'

export class Article {
	title = def.stringColumn()
	publishAt = def.dateTimeColumn()
	slug = def.stringColumn().notNull().unique()
	linkedFrom = def.oneHasMany(Link, 'article')
	perex = def.stringColumn()
	content = def.oneHasOne(Content)
	seo = def.oneHasOne(Seo)
}
