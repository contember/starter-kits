const getHomePage = `#graphql
  query {
	listForm(filter: { publishAt: { lte: "now" } }) {
		id
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
			required
		}
	}
}
`

export default getHomePage
