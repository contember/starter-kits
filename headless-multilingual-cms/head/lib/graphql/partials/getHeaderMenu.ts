const getHeader = `#graphql
	getHeaderMenu: getMenu(by: {position: header}) {
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
						base {
							role
						}
					}
				}
			}
		}
	}
`

export default getHeader
