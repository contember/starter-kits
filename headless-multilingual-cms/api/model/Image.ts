import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Locale } from './Locale'
import { Article } from './Article'
import { ContentBlock, ContentImage, ContentFeatureItem, TestimonialAuthor } from './ContentBlock'
import { Seo } from './Seo'
import { Setting } from './Setting'
import { publicRole } from './acl'

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
	locales = def.oneHasMany(ImageLocale, 'base')
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()

	articles = def.oneHasMany(Article, 'coverPhoto')
	contentBlocks = def.oneHasMany(ContentBlock, 'image')
	contentImage = def.oneHasMany(ContentImage, 'image')
	contentFeaturedItems = def.oneHasMany(ContentFeatureItem, 'image')
	testimonialAuthor = def.oneHasMany(TestimonialAuthor, 'image')
	seo = def.oneHasMany(Seo, 'image')
	settings = def.oneHasMany(Setting, 'logo')
}

@acl.allow(publicRole, {
	when: { base: acl.canRead('locales') },
	read: true,
})
@def.Unique('base', 'locale')
export class ImageLocale {
	base = def.manyHasOne(Image, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'images').notNull().cascadeOnDelete()

	alt = def.stringColumn()
}
