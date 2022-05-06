import getFooterMenu from "../partials/getFooterMenu"
import getHeaderMenu from "../partials/getHeaderMenu"
import getSetting from "../partials/getSettings"

const getArticle = `#graphql 
	query getArticle($slug: String!) {
		getArticle(by: {slug: $slug}) {
			id
			headline
			publishAt
			slug
			lead
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
		${getHeaderMenu}
		${getFooterMenu}
		${getSetting}
	}
`

export default getArticle
