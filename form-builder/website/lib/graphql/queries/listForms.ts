const listForms = `#graphql
  query {
	listForm(filter: { publishAt: { lte: "now" } }) {
		id
		slug
	}
}
`

export default listForms
