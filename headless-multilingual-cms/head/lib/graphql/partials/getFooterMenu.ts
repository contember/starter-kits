import getSettting from "./getSettings"

const getFooterMenu = `#graphql
	getFooterMenu: getMenu(by: {position: footer}) {
		id
		position
		localesByLocale(by: { locale: $localeUnique }) {
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
						root {
							role
						}
					}
				}
			}
		}
	}
`

export default getFooterMenu
