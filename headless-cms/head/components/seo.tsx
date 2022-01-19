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

export default function Seo({ seo }: SeoProps) {
	const { title, description, ogTitle, ogDescription, ogImage } = seo ?? {}
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image" content={ogImage?.url} />
		</Head>
	)
}
