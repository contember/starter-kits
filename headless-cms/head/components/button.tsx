export default function Button(props: any) {
	const { label, url } = props
	console.log('props', props)
	const urlTypes = {
		url: url.url,
		page: url.page.slug,
	}
	const href = url.typ ? url.url : '#'
	return (
		<a href={href} className={`button ${props.type}`}>
			{label}
		</a>
	)
}
