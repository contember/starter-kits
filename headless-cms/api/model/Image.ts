import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Article } from './Article'
import { ContentBlock, ContentFeatureItem, ContentImage, TestimonialAuthor } from './ContentBlock'
import { Seo } from './Seo'
import { Setting } from './Setting'

@acl.allow(publicRole, {
	when: {
		or: [
			{ articles: acl.canRead('coverPhoto') },
			{ contentBlocks: acl.canRead('image') },
			{ contentImage: acl.canRead('image') },
			{ contentFeaturedItems: acl.canRead('image') },
			{ testimonialAuthor: acl.canRead('image') },
			{ seo: acl.canRead('image') },
			{ settings: acl.canRead('logo') },
		],
	},
	read: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()

	articles = def.oneHasMany(Article, 'coverPhoto')
	contentBlocks = def.oneHasMany(ContentBlock, 'image')
	contentImage = def.oneHasMany(ContentImage, 'image')
	contentFeaturedItems = def.oneHasMany(ContentFeatureItem, 'image')
	testimonialAuthor = def.oneHasMany(TestimonialAuthor, 'image')
	seo = def.oneHasMany(Seo, 'image')
	settings = def.oneHasMany(Setting, 'logo')
}
