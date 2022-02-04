import Head from "next/head"
import { useRouter } from "next/router"

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
	locales?: any[],
}

export default function Seo({ seo, locales }: SeoProps) {
	const router = useRouter()

	const { title, description, ogTitle, ogDescription, ogImage } = seo ?? {}
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			<meta property="og:image" content={ogImage?.url} />
			{locales && locales.map((locale: any) => {
				const { domainLocales } = router
				const localeDomain = domainLocales?.filter((domain) => domain.defaultLocale === locale.locale.code)[0]
				const href = localeDomain ? `https://${localeDomain.domain}/${locale.slug}` : `${process.env.NEXT_PUBLIC_WEB_URL}/${locale.slug ?? ''}`

				return (
					<link rel="alternate" hrefLang={locale.locale.code} href={href} key={locale.id} />
				)
			})}

		</Head>
	)
}
