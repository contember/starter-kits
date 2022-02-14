import getFooterMenu from "../partials/getFooterMenu"
import getHeaderMenu from "../partials/getHeaderMenu"
import getSettting from "../partials/getSettings"

const getHomePage = `#graphql
	query ($localeUnique: LocaleUniqueWhere) {
		getPage(by: { role: homePage }) {
			id
			role
			localesByLocale(by: { locale: $localeUnique }) {
			id
			publishAt
			seo {
				id
				title
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
			}
			blocks {
				id
				order
				type
				primaryText
				secondaryText
				content {
					id
					parts {
						id
						json
					}
				}
				buttons {
				id
				order
				button {
					id
					label
					type
					target {
						id
						type
						url
						article {
							slug
						}
						page {
							slug
						}
					}
				}
				}
				image {
					url
					width
					height
					localesByLocale(by: { locale: $localeUnique }) {
						alt
					}
				}
				images {
					id
					order
					image {
						url
						width
						height
						localesByLocale(by: { locale: $localeUnique }) {
							alt
						}
					}
				}
				featureList {
					id
					order
					primaryText
					content {
						parts {
							json
						}
					}
					icon {
						url
						width
						height
						localesByLocale(by: { locale: $localeUnique }) {
							alt
						}
					}
				}
				testimonials {
				id
				order
				content {
					parts {
						json
						references {
							type
							link {
								id
								type
								url
								article {
									id
									slug
								}
								page {
									id
									slug
								}
							}
						}
					}
				}
				author {
					name
					title
					image {
						url
						width
						height
						localesByLocale(by: { locale: $localeUnique }) {
							alt
						}
					}
				}
				}
			}
			slug
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
		${getSettting}
	}
`

export default getHomePage
