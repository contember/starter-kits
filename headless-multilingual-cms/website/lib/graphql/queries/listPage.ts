const listPage = `#graphql
	query {
		listPage {
			id
			role
			locales {
				id
				locale {
					code
				}
				slug
			}
		}
	}
`

export default listPage
