import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Article } from './Article'
import { Image } from './Image'
import { Page } from './Page'
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

	article = def.oneHasOneInverse(Article, 'seo')
	page = def.oneHasOneInverse(Page, 'seo')
}
