export default async function gqlfetch(query: any, variables?: any) {
	const response = await fetch('http://contember:4000/content/headless-cms/live', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer 0000000000000000000000000000000000000000'
		},
		body: JSON.stringify({ query, variables })
	})

	return response.json()
}
