import * as React from 'react'
import { Component, HasOne, RadioField, RadioGroup, TextField } from '@contember/admin'
import { LinkField } from '.'

type ButtonProps = {
	field: string
}

export const Button = Component<ButtonProps>(
	({ field }) => (
		<HasOne field={field}>
			<LinkField field="url" label="Link" />
			<TextField field="label" label="Label" />
			<RadioField
				field="type"
				label="Type"
				options={[
					{ value: 'primary', label: 'Primary' },
					{ value: 'secondary', label: 'Secondary' }
				]}
				defaultValue="primary"
			/>
		</HasOne>
	),
	'Button'
)
