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
			alt
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
