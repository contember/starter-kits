import getFooterMenu from "../partials/getFooterMenu"
import getHeaderMenu from "../partials/getHeaderMenu"
import getSettting from "../partials/getSettings"

const getPage = `#graphql
	query($slug: String, $localeUnique: LocaleUniqueWhere) {
		getPage(by: { locales: { locale: $localeUnique, slug: $slug } }) {
			id
			role
			localesByLocale(by: { locale: $localeUnique }) {
				publishAt
				locale {
					code
				}
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
							json
							references {
								id
								type
								target {
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
								references {
									id
									type
									target {
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
								id
								type
								target {
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

export default getPage
