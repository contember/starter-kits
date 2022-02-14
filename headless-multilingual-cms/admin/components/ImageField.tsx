import * as React from 'react'
import { Component, HasOne, ImageUploadField, TextField } from '@contember/admin'
import locale from '../locales'
import { LocaleSideDimension } from './LocaleSideDimension'

type ImageFieldProps = {
	field: string
	label?: string
}

export const ImageField = Component<ImageFieldProps>(
	({ field, label }) => (
		<HasOne field={field}>
			<ImageUploadField
				label={label ?? locale['Image']}
				urlField="url"
				widthField="width"
				heightField="height"
			>
				<LocaleSideDimension>
					<TextField field="alt" label={locale['Alternative text']} />
				</LocaleSideDimension>
			</ImageUploadField>
		</HasOne>
	),
	'ImageField',
)
