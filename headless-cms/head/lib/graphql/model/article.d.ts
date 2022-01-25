import type { Image } from './image'
import type { Link } from './link'
import type { Content } from './content'
import type { Seo } from './seo'

export type Article = {
	id: string
	headline?: string
	coverPhoto: Image
	publishAt?: string
	slug: string
	linkedFrom: Link
	perex?: string
	content?: Content
	seo?: Seo
}
