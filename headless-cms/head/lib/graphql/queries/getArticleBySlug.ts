const getArticle = `#graphql 
	query getArticle($slug: String!) {
		getArticle(by: {slug: $slug}) {
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
			seo {
				id
				description
				ogTitle
				ogDescription
				ogImage {
					id
					url
					width
					height
					alt
				}
				title
			}
		}
	}
`

export default getArticle
