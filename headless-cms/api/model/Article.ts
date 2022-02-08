import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Seo } from './Seo'

export class Article {
	headline = def.stringColumn()
	coverPhoto = def.manyHasOne(Image)
	publishAt = def.dateTimeColumn()
	slug = def.stringColumn().notNull().unique()
	linkedFrom = def.oneHasMany(Link, 'article')
	lead = def.stringColumn()
	content = def.oneHasOne(Content).cascadeOnDelete()
	seo = def.oneHasOne(Seo, 'article').cascadeOnDelete()
}
