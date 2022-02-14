import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Seo } from './Seo'

export class Article {
	publishAt = def.dateTimeColumn()
	headline = def.stringColumn().notNull()
	coverPhoto = def.manyHasOne(Image).setNullOnDelete()
	lead = def.stringColumn()
	slug = def.stringColumn().notNull().unique()
	linkedFrom = def.oneHasMany(Link, 'article')
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	seo = def.oneHasOne(Seo, 'article').notNull().removeOrphan()
}
