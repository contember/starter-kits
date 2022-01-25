import type { Link } from './link'
import type { ContentBlock } from './content'
import type { Seo } from './seo'

export type Page = {
	publishAt: string
	slug: string
	role: 'homePage' | 'blogPage' | 'error404Page'
	linkedFrom?: Link
	blocks?: ContentBlock[]
	seo?: Seo
}
