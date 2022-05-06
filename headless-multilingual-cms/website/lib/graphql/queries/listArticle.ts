import listArticleLocalized from "../partials/listArticleLocalized"

const listArticleQuery = `#graphql
	query ($locale: String, $localeUnique: LocaleUniqueWhere) {
		${listArticleLocalized}
	}
`

export default listArticleQuery
