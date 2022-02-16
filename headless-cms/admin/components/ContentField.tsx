import * as React from 'react'
import { BlockEditor, BlockEditorProps, RichEditor } from '@contember/admin'
import { Component } from '@contember/admin'
import { InsertLink, LinkElement } from './CustomLinks'
import { withAnchorsAsReference } from './AnchorInsertHandler'
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
		{
			discriminateBy: 'link',
			referenceContent: InsertLink,
			label: locale['Insert link'],
			title: locale['Insert link'],
			blueprintIcon: 'link',
		},
	]
]


export const ContentField = Component<ContentFieldProps>(
	({ contentField, referencesField, field, label, size }) => (
		<BlockEditor
			contentField={contentField ?? 'json'}
			referencesField={referencesField ?? "references"}
			referenceDiscriminationField="type"
			field={field ?? 'content.parts'}
			label={label ?? locale['Content']}
			size={size ?? 'default'}
			sortableBy="order"
			inlineButtons={inlineButtons}
			augmentEditorBuiltins={editor => {
				withAnchorsAsReference(
					editor,
					{
						elementType: 'link',
						updateReference: (url, getAccessor) => {
							getAccessor().getField('target.type').updateValue('external')
							getAccessor().getField('target.url').updateValue(url)
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
