import type { Link } from './link'
import type { Image } from './image'
import type { Article } from './article'
import type { Button } from './button'
import type { ContactMessage } from './contactMessage'

export type Content = {
	parts?: ContentPart[]
}

export type ContentPart = {
	content: Content
	order: number
	json: string
	references?: ContentReference[]
}

export type ContentReference = {
	contentPart: ContentPart
	type: 'link'
	primaryText?: string
	text?: string
	link?: Link
}

export type ContentFeatureItem = {
	id: string
	order: number
	primaryText: string
	content: Content
	icon: Image
	contentBlock: ContentBlock
}

export type ContentTestimonial = {
	id: string
	order: number
	content: Content
	author: TestimonailAuthor
	contentBlock: ContentBlock
}

export type TestimonailAuthor = {
	id: string
	name?: string
	title?: string
	image: Image
}

export type ContentBlogPost = {
	order: number
	blogPost?: Article
	contentBlock: ContentBlock
}

export type ContentBlock = {
	id: string
	type: 'heroSection' | 'logosSection' | 'contentSection' | 'featureSection' | 'ctaSection' | 'testimonialSection'
	order: number
	primaryText?: string
	secondaryText?: string
	image?: Image
	images?: Image[]
	buttons?: Button[]
	content?: Content
	featureList?: ContentFeatureItem[]
	testimonials?: ContentTestimonial[]
	blogPosts?: ContentBlogPost[]
	contactForm?: ContactMessage
}
