const listArticleSlugQuery = `#graphql
	query {
		listArticle {
			id
			locales {
				id	
				slug
				locale {
					id
					code
				}
			}
		}
	}
`

export default listArticleSlugQuery
