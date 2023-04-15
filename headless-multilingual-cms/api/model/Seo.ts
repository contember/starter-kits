import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { ArticleLocale } from './Article'
import { Image } from './Image'
import { PageLocale } from './Page'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	when: {
		or: [
			{ article: acl.canRead('seo') },
			{ page: acl.canRead('seo') },
		],
	},
	read: true,
})
export class Seo {
	title = def.stringColumn().notNull()
	description = def.stringColumn()
	ogTitle = def.stringColumn()
	ogDescription = def.stringColumn()
	ogImage = def.manyHasOne(Image).setNullOnDelete()

	article = def.oneHasOneInverse(ArticleLocale, 'seo')
	page = def.oneHasOneInverse(PageLocale, 'seo')
}
