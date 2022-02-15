import Link from "next/link"

type CustomLinkProps = {
	label: string
	url?: any
}

export default function CustomLink(props: CustomLinkProps) {
	const { label, url } = props

	const pageUrlRole: any = {
		homePage: `/`,
		blogPage: `/blog`,
		error404Page: "/404"
	}

	const urlTypes: any = {
		url: url?.url,
		page: url?.page?.role ? pageUrlRole[url?.page.role] : `/${url?.page?.slug}`,
		article: `/${url?.article?.slug}`
	}
	const href = url ? url.type && urlTypes[url.type] : null

	if (href) {
		return (
			<Link href={href}>
				<a>{label}</a>
			</Link>
		)
	} else {
		return <span>{label}</span>
	}

}
