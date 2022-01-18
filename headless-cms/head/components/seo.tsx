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
	return (
		<Head>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta property="og:title" content={seo.ogTitle} />
			<meta property="og:description" content={seo.ogDescription} />
			<meta property="og:image" content={seo.ogImage?.url} />
		</Head>
	)        
}
