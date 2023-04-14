import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Article } from './Article'
import { Button } from './Button'
import { Content } from './Content'
import { Image } from './Image'
import { Page } from './Page'
import { publicRole } from './acl'

export const ContentBlockType = def.createEnum(
	'heroSection', // primaryText, content, images, buttons
	'logosSection', // jsonContent, images
	'contentSection', // primaryText, content
	'featureSection', // primaryText, secondaryText, content, featureList
	'ctaSection', // primaryText, secondaryText, content, buttons
	'testimonialSection', // primaryText, content, testimonials
	'contactSection', // primaryText, content
)

@acl.allow(publicRole, {
	when: { page: acl.canRead('blocks') },
	read: true,
})
export class ContentBlock {
	order = def.intColumn().notNull()
	type = def.enumColumn(ContentBlockType).notNull()
	page = def.manyHasOne(Page, 'blocks').notNull().cascadeOnDelete()
	
	primaryText = def.stringColumn()
	secondaryText = def.stringColumn()
	image = def.manyHasOne(Image).setNullOnDelete()
	images = def.oneHasMany(ContentImage, 'contentBlock').orderBy('order')
	buttons = def.oneHasMany(ContentButton, 'contentBlock').orderBy('order')
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	featureList = def.oneHasMany(ContentFeatureItem, 'contentBlock').orderBy('order')
	testimonials = def.oneHasMany(ContentTestimonial, 'contentBlock').orderBy('order')
	blogPosts = def.oneHasMany(ContentBlogPost, 'contentBlock').orderBy('order')
}

@acl.allow(publicRole, {
	when: { contentBlock: acl.canRead('images') },
	read: true,
})
export class ContentImage {
	order = def.intColumn().notNull()
	image = def.manyHasOne(Image).setNullOnDelete()

	contentBlock = def.manyHasOne(ContentBlock, 'images').notNull().cascadeOnDelete()
}

@acl.allow(publicRole, {
	when: { contentBlock: acl.canRead('buttons') },
	read: true,
})
export class ContentButton {
	order = def.intColumn().notNull()
	button = def.oneHasOne(Button).notNull().removeOrphan()

	contentBlock = def.manyHasOne(ContentBlock, 'buttons').notNull().cascadeOnDelete()
}

@acl.allow(publicRole, {
	when: { contentBlock: acl.canRead('featureList') },
	read: true,
})
export class ContentFeatureItem {
	order = def.intColumn().notNull()
	primaryText = def.stringColumn()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	icon = def.manyHasOne(Image).setNullOnDelete()

	contentBlock = def.manyHasOne(ContentBlock, 'featureList').notNull().cascadeOnDelete()
}

@acl.allow(publicRole, {
	when: { contentBlock: acl.canRead('testimonials') },
	read: true,
})
export class ContentTestimonial {
	order = def.intColumn().notNull()
	content = def.oneHasOne(Content).notNull().removeOrphan()
	author = def.oneHasOne(TestimonialAuthor).removeOrphan().setNullOnDelete()

	contentBlock = def.manyHasOne(ContentBlock, 'testimonials').notNull().cascadeOnDelete()
}

@acl.allow(publicRole, {
	when: { testimonial: acl.canRead('author') },
	read: true,
})
export class TestimonialAuthor {
	name = def.stringColumn().notNull()
	title = def.stringColumn()
	image = def.manyHasOne(Image).setNullOnDelete()

	testimonial = def.oneHasOneInverse(ContentTestimonial, 'author')
}

@acl.allow(publicRole, {
	when: { contentBlock: acl.canRead('blogPosts') },
	read: true,
})
export class ContentBlogPost {
	order = def.intColumn().notNull()
	blogPost = def.manyHasOne(Article)
	
	contentBlock = def.manyHasOne(ContentBlock, 'blogPosts').notNull().cascadeOnDelete()
}
