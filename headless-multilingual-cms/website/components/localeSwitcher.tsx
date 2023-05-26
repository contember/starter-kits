import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ({ options }: any) {
	const router = useRouter()
	const { locales, locale: activeLocale } = router
	const otherLocales = locales?.filter((locale) => locale !== activeLocale)

	return (
		<div>
			<p>Locale switcher:</p>
			<ul>
				{otherLocales?.map((locale) => {
					const slug = options.locales?.find((l: any) => l.locale?.code === locale)?.slug
					const pathname = slug ? `${options.prefix}/${slug}` : '/'

					return (
						<li key={locale}>
							<Link href={pathname} locale={locale}>{locale}</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
