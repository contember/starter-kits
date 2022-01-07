import * as React from 'react'
import { BlockEditor } from '@contember/admin'
import { Component } from '@contember/admin'

type ContentFieldProps = {
	contentField?: string
	field?: string
	label?: string
	size?: 'large' | 'default'
}

export const ContentField = Component<ContentFieldProps>(
	({ contentField, field, label, size }) => (
		<BlockEditor
			contentField={contentField ?? 'json'}
			field={field ?? 'content.parts'}
			label={label ?? 'Content'}
			size={size ?? 'default'}
			sortableBy="order"
		/>
	),
	'ContentField'
)
