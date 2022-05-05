const createMessage = `#graphql
	mutation($data: ContactMessageCreateInput!) {
		createContactMessage(data: $data) {
			ok
			errorMessage
			validation {
				valid
				errors {
					path {
						__typename
					}
					message {
						text
						__typename
					}
				}
			}
		}
	}
`

export default createMessage
