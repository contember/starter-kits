import {
	Content,
	Image,
	Link,
	Seo
} from '.'
import { SchemaDefinition as def } from '@contember/schema-definition'

export class Article {
	headline = def.stringColumn()
	coverPhoto = def.manyHasOne(Image)
	publishAt = def.dateTimeColumn()
	slug = def.stringColumn().notNull().unique()
	linkedFrom = def.oneHasMany(Link, 'article')
	perex = def.stringColumn()
	content = def.oneHasOne(Content).cascadeOnDelete()
	seo = def.oneHasOne(Seo, 'article').cascadeOnDelete()
}
