import type { Image } from './image'
import type { Article } from './article'
import type { Page } from './page'

export type Seo = {
	id: string
	title: string
	description?: string
	ogTitle?: string
	ogDescription?: string
	ogImage?: Image
	article?: Article
	page?: Page
}
