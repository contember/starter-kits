const listArticleLocalized = `#graphql
	listArticle(filter: { locales: { locale: { code: { eq: $locale } } } }) {
		id
		localesByLocale(by: { locale: $localeUnique }) {
			headline
			publishAt
			slug
			lead
			content {
				id
				parts {
					id
					json
				}
			}
		}
		coverPhoto {
			id
			url
			width
			height
			localesByLocale(by: { locale: $localeUnique }) {
				alt
			}
		}
	}
`

export default listArticleLocalized
