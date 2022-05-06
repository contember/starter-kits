import getFooterMenu from "../partials/getFooterMenu"
import getHeaderMenu from "../partials/getHeaderMenu"
import getSetting from "../partials/getSettings"

const getArticle = `#graphql 
	query getArticle($slug: String!, $localeUnique: LocaleUniqueWhere) {
		getArticle(by: { locales: { locale: $localeUnique, slug: $slug } }) {
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
						localesByLocale(by: { locale: $localeUnique }) {
							alt
						}
					}
					title
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
			locales {
				id
				slug
				locale {
					code
				}
			}
		}
		${getHeaderMenu}
		${getFooterMenu}
		${getSetting}
	}
`

export default getArticle
