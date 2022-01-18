const getPage = `#graphql
  query($slug: String) {
    getPage(by: {slug: $slug}) {
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
					type
					primaryText
					text
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
				url {
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
					type
					primaryText
					text
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
					type
					primaryText
					text
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

export default getPage