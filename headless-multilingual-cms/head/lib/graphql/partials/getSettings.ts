const getSettting = `#graphql
	getSetting(by: {unique: One}) {
		id
		logo {
			id
			url
			width
			height
			localesByLocale(by: { locale: $locale }) {
				alt
			}
		}
		localesByLocale(by: { locale: $locale }) {
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
