interface CustomError extends Error {
	cause?: {
		code?: string;
	}
}

function getFetchErrorMessage(error: unknown): string {
	if ((error as CustomError)?.cause?.code) {
		switch ((error as CustomError).cause?.code) {
			case 'ECONNREFUSED':
				return 'Failed to fetch data from the API. Please check your environment variables and make sure your API is running.'
			default:
				return 'An unknown error occurred. Please try again later.'
		}
	}

	return 'An unknown error occurred. Please try again later.'
}

export async function serverSideFetch(query: any, variables?: any) {
	try {
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
	} catch (error) {
		throw new Error(getFetchErrorMessage(error))
	}
}

export async function clientSideFetch(query: any, variables?: any) {
	try {
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
	} catch (error) {
		throw new Error(getFetchErrorMessage(error))
	}
}
