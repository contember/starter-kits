import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher({ options }: any) {
	const router = useRouter()
	const { locales, locale: activeLocale } = router
	const otherLocales = locales?.filter((locale) => locale !== activeLocale)

	return (
		<div>
			<p>Locale switcher:</p>
			<ul>
				{otherLocales?.map((locale) => {
					const slug = options.locales.filter(l => l.locale.code === locale)[0].slug
					const pathname = slug ? `/${slug}` : router.pathname
					return (
						<li key={locale}>
							<Link href={pathname} locale={locale}>
								<a>{locale}</a>
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
