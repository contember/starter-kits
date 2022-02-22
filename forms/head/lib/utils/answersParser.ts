import { hasValue } from "./hasValue"

import { clientSideFetch } from "../graphql/gqlfetch"
import signedUpload from "../graphql/mutations/signedUpload"

export async function answersParser(values: any[]) {
	const notEmptyValues = values.filter(([, value]) => hasValue(value))
	return await Promise.all(notEmptyValues.map(async (value) => await submitDataParser(value)))
}


async function submitDataParser([id, value]) {
	if (typeof value === 'object' && value.size > 0) {
		const { errors, data } = await clientSideFetch(signedUpload, { contentType: value.type })
		await fetch(
			data.signedUpload.url,
			{
				method: data.signedUpload.method,
				headers: Object.fromEntries(data.signedUpload.headers.map(({ key, value }) => [key, value])),
				body: value,
			}
		)
		console.log('publicUrl', data.signedUpload.publicUrl)

		return {
			create: {
				value: data.signedUpload.publicUrl,
				input: {
					connect: { id }
				},
			}
		}
	} else {
		return {
			create: {
				value,
				input: {
					connect: { id }
				},
			},
		}
	}
}
