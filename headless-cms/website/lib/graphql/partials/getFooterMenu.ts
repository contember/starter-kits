import getSettting from "./getSettings"

const getFooterMenu = `#graphql
	getFooterMenu: getMenu(by: {position: footer}) {
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

export default getFooterMenu
