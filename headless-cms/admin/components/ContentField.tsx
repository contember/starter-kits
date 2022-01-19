import * as React from 'react'
import { BlockEditor, BlockEditorProps, RichEditor } from '@contember/admin'
import { Component } from '@contember/admin'
import { InsertLink, LinkElement } from './customLinks'
import { withAnchorsAsReference } from './AnchorInsertHandler'

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
		RB.headingFour
	],
	[
		RB.unorderedList,
		RB.orderedList
	],
	[
		RB.code,
		{
			discriminateBy: 'link',
			referenceContent: InsertLink,
			label: 'Insert link',
			title: 'Insert link',
			blueprintIcon: 'link',
		}
	]
]


export const ContentField = Component<ContentFieldProps>(
	({ contentField, referencesField, field, label, size }) => (
		<BlockEditor
			contentField={contentField ?? 'json'}
			referencesField={referencesField ?? "references"}
			referenceDiscriminationField="type"
			field={field ?? 'content.parts'}
			label={label ?? 'Content'}
			size={size ?? 'default'}
			sortableBy="order"
			inlineButtons={inlineButtons}
			augmentEditorBuiltins={editor => {
				withAnchorsAsReference(
					editor,
					{
						elementType: 'link',
						updateReference: (url, getAccessor) => {
							getAccessor().getField('link.type').updateValue('external')
							getAccessor().getField('link.url').updateValue(url)
						},
					},
				)
				editor.registerElement({
					type: 'link',
					isInline: true,
					render: LinkElement,
				})
			}}
		/>
	),
	'ContentField',
)
