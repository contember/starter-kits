import * as React from 'react'
import { Component, HasOne, ImageUploadField, TextField } from '@contember/admin'

type ImageFieldProps = {
	field: string
	label?: string
}

export const ImageField = Component<ImageFieldProps>(
	({ field, label }) => (
		<HasOne field={field}>
			<ImageUploadField
				label={label ?? 'Image'}
				urlField="url"
				widthField="width"
				heightField="height"
			>
				<TextField field="alt" label="Alternative text" />
			</ImageUploadField>
		</HasOne>

	),
	'ImageField'
)
