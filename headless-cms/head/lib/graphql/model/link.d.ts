import type { Article } from './article'
import type { Page } from './page'

export type Link = {
	id: string
	type: 'url' | 'article' | 'page'
	url?: string
	article?: Article
	page?: Page
}
