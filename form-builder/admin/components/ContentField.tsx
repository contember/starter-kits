import * as React from 'react'
import { BlockEditor, BlockEditorProps, RichEditor } from '@contember/admin'
import { Component } from '@contember/admin'
import locale from '../locales'

type ContentFieldProps = {
	contentField?: string
	referencesField?: string
	field?: string
	label?: string
	size?: 'large' | 'default'
}

const RB = RichEditor.buttons
const inlineButtons: BlockEditorProps["inlineButtons"] = [
	[
		RB.bold,
		RB.italic,
		RB.underline,
		RB.strikeThrough
	],
	[
		RB.headingOne,
		RB.headingTwo,
		RB.headingThree,
		RB.headingFour,
	],
	[
		RB.unorderedList,
		RB.orderedList,
	],
	[
		RB.code,
		RB.anchor,
	]
]


export const ContentField = Component<ContentFieldProps>(
	({ contentField, field, label, size }) => (
		<BlockEditor
			contentField={contentField ?? 'json'}
			field={field ?? 'content.parts'}
			label={label ?? locale['Content']}
			size={size ?? 'default'}
			sortableBy="order"
			inlineButtons={inlineButtons}
		/>
	),
	'ContentField',
)
