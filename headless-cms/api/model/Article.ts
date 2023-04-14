import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { Link } from './Link'
import { Seo } from './Seo'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	when: { publishAt: { lte: 'now' } },
	read: true,
})
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
