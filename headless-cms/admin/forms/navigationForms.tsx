import * as React from 'react'
import { Component, Repeater, SelectField, TextField } from "@contember/admin"
import { LinkField } from '../components/LinkField'

export const NavigationForm = Component(
	() => (
		<>
			<SelectField
				field="position"
				label="Position"
				options={[
					{ label: 'Header', value: 'header' },
					{ label: 'Footer', value: 'footer' }
				]}
			/>
			<Repeater field="items" label="Items" sortableBy="order">
				<TextField field="label" label="Label" />
				<LinkField field="url" label="Url" />
			</Repeater>
		</>
	), 'NavigationForm'
)
