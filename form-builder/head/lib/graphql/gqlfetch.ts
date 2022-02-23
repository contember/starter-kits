export async function serverSideFetch(query: any, variables?: any) {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
		},
		body: JSON.stringify({ query, variables })
	})

	return response.json()
}

export async function clientSideFetch(query: any, variables?: any) {
	const response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? '', {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
		},
		body: JSON.stringify({ query, variables })
	})

	return response.json()
}
