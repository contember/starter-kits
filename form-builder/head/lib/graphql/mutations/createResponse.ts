const createResponse = `#graphql
	mutation ($data: ResponseCreateInput!) {
		createResponse(data: $data) {
			ok
			errorMessage
		}
	}
`

export default createResponse
