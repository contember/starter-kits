const listArticle = `#graphql
	query {
		listArticle {
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
	}
`

export default listArticle
