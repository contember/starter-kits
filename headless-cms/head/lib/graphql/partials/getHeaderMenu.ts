const getHeaderMenu = `#graphql
	getHeaderMenu: getMenu(by: {position: header}) {
		id
		position
		items {
			id
			label
			url {
				id
				type
				url
				article {
					slug
				}
				page {
					slug
					role
				}
			}
		}
	}
`

export default getHeaderMenu
