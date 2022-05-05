import listArticle from "../partials/listArticle"

const listArticleQuery = `#graphql
	query {
		${listArticle}
	}
`

export default listArticleQuery
