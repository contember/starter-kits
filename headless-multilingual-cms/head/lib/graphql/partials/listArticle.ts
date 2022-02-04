const listArticle = `#graphql
	listArticle(filter: { publishAt: { lte: "now" } }) {
		id
		headline
		publishAt
		slug
		perex
		coverPhoto {
			id
			url
			width
			height
			localesByLocale(by: { locale: $locale }) {
				alt
			}
		}
		content {
			id
			parts {
				id
				json
			}
		}
	}
`

export default listArticle
