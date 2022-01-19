import * as React from 'react'
import { LinkField } from '.'
import './editorButton.sass'
import {
	Box,
	Button,
	Component,
	Dropdown,
	EditorRenderElementProps,
	EditorTransforms,
	Icon,
	InitializeReferenceContentProps,
	useEditor,
} from '@contember/admin'

export const InsertLink = Component<InitializeReferenceContentProps>(
	({ onSuccess, onCancel }) => (
		<>
			<LinkField field="link" />
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', minWidth: '350px' }}>
				<Button onClick={onCancel}>Cancel</Button>
				<Button intent="primary" onClick={() => onSuccess({ createElement: { type: 'link' } })}>Insert</Button>
			</div>
		</>
	),
	() => <LinkField field="link" />,
)


export const LinkElement = (props: EditorRenderElementProps) => {
	const editor = useEditor()
	return (
		<span {...props.attributes} style={{ color: 'var(--cui-control-color)' }}>
			{props.children}
			<span contentEditable={false}>
				<Dropdown
					renderToggle={({ ref, onClick }) => (
						<button ref={ref as any} onClick={onClick} className="editorButton">
							<Icon blueprintIcon="link" />
						</button>
					)}
				>
					<Box>
						<LinkField field="link" />
						<Button size="small" onClick={() => EditorTransforms.unwrapNodes(editor, { at: [], match: node => node === props.element })}>
							Remove link
						</Button>
					</Box>
				</Dropdown>
			</span>
		</span>
	)
}
