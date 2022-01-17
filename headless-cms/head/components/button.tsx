export default function Button(props: any) {
	const { label, url } = props
	const urlTypes: any = {
		url: url.url,
		page: url.page?.slug,
	}
	const href = url.type && urlTypes[url.type]
	return (
		<a href={href} className={`button ${props.type}`}>
			{label}
		</a>
	)
}
