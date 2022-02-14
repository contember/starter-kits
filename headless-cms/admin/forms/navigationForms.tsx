import * as React from 'react'
import { Component, Repeater, SelectField, TextField } from "@contember/admin"
import { LinkField } from '../components/LinkField'
import locale from '../locales'

export const NavigationForm = Component(
	() => (
		<>
			<SelectField
				field="position"
				label={locale['Position']}
				options={[
					{ label: locale['Header'], value: 'header' },
					{ label: locale['Footer'], value: 'footer' }
				]}
			/>
			<Repeater field="items" label={locale['Items']} sortableBy="order">
				<TextField field="label" label={locale['Label']} />
				<LinkField field="url" label={locale['Url']} />
			</Repeater>
		</>
	), 'NavigationForm'
)
