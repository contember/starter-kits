import Head from "next/head"

export type SeoProps = {
	seo: {
		title: string
		description?: string
		ogTitle?: string
		ogDescription?: string
		ogImage?: {
			url: string
		}
	}
}

export default function ({ seo }: SeoProps) {
	const { title, description, ogTitle, ogDescription, ogImage } = seo ?? {}
	return (
		<Head>
			<title>{title}</title>
			{description && <meta name="description" content={description} />}
			{ogTitle && <meta property="og:title" content={ogTitle} />}
			{ogDescription && <meta property="og:description" content={ogDescription} />}
			{ogImage?.url && <meta property="og:image" content={ogImage.url} />}
		</Head>
	)
}
