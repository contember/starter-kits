export default `#graphql
	mutation($contentType: String!) {
		signedUpload: generateUploadUrl(contentType: $contentType) {
			url
			publicUrl
			method
			headers {
				key
				value
			}
		}
	}
`
