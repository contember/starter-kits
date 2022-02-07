const getSettting = `#graphql
	getSetting(by: {unique: One}) {
		id
		logo {
			id
			url
			width
			height
			localesByLocale(by: { locale: $localeUnique }) {
				alt
			}
		}
		localesByLocale(by: { locale: $localeUnique }) {
			footerCopyright {
				id
				parts {
					id
					json
				}
			}
		}
	}
`

export default getSettting
