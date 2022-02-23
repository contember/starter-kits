const getFormBySlug = `#graphql
	query($slug: String!) {
		getForm(by: {slug: $slug}, filter: { publishAt: { lte: "now" } }) {
			id
			title
			publishAt
			slug
			content {
				id
				parts(orderBy: { order: asc }) {
					id
					order
					json
				}
			}
			inputs {
				id
				order
				type
				question
				date
				dateTime
				placeholder
				required
				options(orderBy: { order: asc }) {
					id
					value
				}
			}
		}
	}
`

export default getFormBySlug
