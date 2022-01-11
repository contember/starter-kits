import { SchemaDefinition as def } from '@contember/schema-definition'
import { Article, Image, Page } from '.'

export class Seo {
	title = def.stringColumn()
	description = def.stringColumn()
	ogTitle = def.stringColumn()
	ogDescription = def.stringColumn()
	ogImage = def.oneHasOne(Image).cascadeOnDelete()

	article = def.oneHasOneInverse(Article, 'seo')
	page = def.oneHasOneInverse(Page, 'seo')
}
