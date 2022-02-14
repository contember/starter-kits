import * as React from 'react'
import { Component, useCurrentContentGraphQlClient, useField } from '@contember/admin'

export const ViewedMarker = Component(
	() => {
		const id = useField('id').value
		const client = useCurrentContentGraphQlClient()
		React.useEffect(() => {
			client.sendRequest('mutation ($id: UUID!) { updateContactMessage(by: { id: $id }, data: { viewed: true }) { ok } }', { variables: { id } })
		}, [id])

		return null
	},
	() => null,
	'ViewedMarker',
)
