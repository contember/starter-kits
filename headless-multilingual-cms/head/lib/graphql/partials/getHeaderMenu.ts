const getHeader = `#graphql
	getHeaderMenu: getMenu(by: {position: header}) {
		id
		position
		localesByLocale(by: { locale: $locale }) {
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

export default getHeader
