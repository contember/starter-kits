import {
	Article,
	Button,
	ContactMessage,
	Content,
	Image,
	Page
} from '.'
import { SchemaDefinition as def } from '@contember/schema-definition'

export const ContentBlockType = def.createEnum(
	'heroSection', // primaryText, jsonContent, images, buttons
	'logosSection', // jsonContent, images
	'contentSection', // primaryText, content
	'featureSection', // primaryText, secondaryText, content, featureList
	'ctaSection', // primaryText, secondaryText, content, buttons
	'testimonialSection', // primaryText, content, testimonials
	'contactSection', // primaryText, content, contactForm
)

export class ContentBlock {
	page = def.manyHasOne(Page, 'blocks').setNullOnDelete()
	order = def.intColumn().notNull()
	type = def.enumColumn(ContentBlockType).notNull()
	
	primaryText = def.stringColumn()
	secondaryText = def.stringColumn()
	jsonContent = def.stringColumn()
	image = def.manyHasOne(Image)
	images = def.oneHasMany(ContentImage, 'contentBlock')
	buttons = def.oneHasMany(ContentButton, 'contentBlock')
	content = def.oneHasOne(Content)
	featureList = def.oneHasMany(ContentFeatureItem, 'contentBlock')
	testimonials = def.oneHasMany(ContentTestimonial, 'contentBlock')
	blogPosts = def.oneHasMany(ContentBlogPost, 'contentBlock')
	contactForm = def.oneHasOne(ContactMessage)
}

export class ContentImage {
	image = def.manyHasOne(Image)
	order = def.intColumn().notNull()
	contentBlock = def.manyHasOne(ContentBlock, 'images')
}

export class ContentButton {
	order = def.intColumn().notNull()
	button = def.oneHasOne(Button)
	contentBlock = def.manyHasOne(ContentBlock, 'buttons')
}

export class ContentFeatureItem {
	order = def.intColumn().notNull()
	primaryText = def.stringColumn()
	content = def.oneHasOne(Content)
	icon = def.manyHasOne(Image)
	contentBlock = def.manyHasOne(ContentBlock, 'featureList')
}

export class ContentTestimonial {
	order = def.intColumn().notNull()
	content = def.oneHasOne(Content)
	author = def.oneHasOne(TestimonailAuthor)
	contentBlock = def.manyHasOne(ContentBlock, 'testimonials')
}

export class TestimonailAuthor {
	name = def.stringColumn()
	title = def.stringColumn()
	image = def.manyHasOne(Image)
}

export class ContentBlogPost {
	order = def.intColumn().notNull()
	blogPost = def.manyHasOne(Article)
	contentBlock = def.manyHasOne(ContentBlock, 'blogPosts')
}
