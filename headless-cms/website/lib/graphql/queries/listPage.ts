const listPage = `#graphql
	query {
		listPage {
			id
			publishAt
			role
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
					alt
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
					alt
				}
				images {
					id
					order
					image {
						url
						width
						height
						alt
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
						alt
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
							alt
						}
					}
				}
			}
			slug
		}
	}
`

export default listPage
