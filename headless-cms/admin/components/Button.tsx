import * as React from 'react'
import locale from '../locales'
import { Component, HasOne, RadioField, TextField } from '@contember/admin'
import { LinkField } from './LinkField'

type ButtonProps = {
	field: string
}

export const Button = Component<ButtonProps>(
	({ field }) => (
		<HasOne field={field}>
			<LinkField field="target" label={locale['Link']} />
			<TextField field="label" label={locale['Label']} />
			<RadioField
				field="type"
				label={locale['Type']}
				orientation="horizontal"
				options={[
					{ value: 'primary', label: locale['Primary'] },
					{ value: 'secondary', label: locale['Secondary'] }
				]}
				defaultValue="primary"
			/>
		</HasOne>
	),
	'Button',
)
