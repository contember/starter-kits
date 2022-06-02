import Link from "next/link"

type CustomLinkProps = {
	label: string
	url?: any
}

export default function (props: CustomLinkProps) {
	const { label, url } = props
	const articlePrefix = '/blog'

	const pageUrlRole: any = {
		homePage: `/`,
		blogPage: articlePrefix,
		error404Page: "/404"
	}

	const urlTypes: any = {
		url: url?.url,
		page: url?.page?.base?.role ? pageUrlRole[url?.page.base.role] : `/${url?.page?.slug}`,
		article: `${articlePrefix}/${url?.article?.slug}`
	}
	const href = url ? url.type && urlTypes[url.type] : null

	if (href) {
		if (url.type === 'url') {
			return <a href={href}>{label}</a>
		}
		return <Link href={href}><a>{label}</a></Link>
	}

	return <span>{label}</span>

}
