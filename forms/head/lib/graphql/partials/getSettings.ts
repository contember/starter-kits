const getSettting = `#graphql
	getSetting(by: {unique: One}) {
		id
		logo {
			id
			url
			width
			height
			alt
		}
		footerCopyright {
			id
			parts {
				id
				json
			}
		}
	}
`

export default getSettting
