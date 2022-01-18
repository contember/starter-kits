import Link from "next/link"

export default function CustomLink(props: any) {
	const { label, url } = props
	const pageUrlRole: any = {
		homePage: "/",
		blogPage: "/blog",
		error404Page: "/404"
	}
	const urlTypes: any = {
		url: url.url,
		page: url.page.role ? pageUrlRole[url.page.role] : url.page?.slug,
		article: url.article?.slug
	}
	const href = url.type && urlTypes[url.type]


	return (
		<Link href={href}>
			<a>
				{label}
			</a>
		</Link>
	)
}
