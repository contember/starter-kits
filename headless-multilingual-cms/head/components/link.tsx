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
		url: url.url,
		page: url.page?.root?.role ? pageUrlRole[url.page.root.role] : `/${url.page?.slug}`,
		article: `/${url.article?.slug}`
	}
	const href = url.type && urlTypes[url.type]

	return (
		<Link href={href}>
			<a>
				{label}
			</a>
		</Link >
	)
}
