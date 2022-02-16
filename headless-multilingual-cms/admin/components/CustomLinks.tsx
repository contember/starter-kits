import * as React from 'react'
import './editorButton.css'
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
import { LinkField } from './LinkField'
import locale from '../locales'

export const InsertLink = Component<InitializeReferenceContentProps>(
	({ onSuccess, onCancel }) => (
		<>
			<LinkField field="target" />
			<div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1em', minWidth: '350px' }}>
				<Button onClick={onCancel}>{locale['Cancel']}</Button>
				<Button intent="primary" onClick={() => onSuccess({ createElement: { type: 'link' } })}>{locale['Insert']}</Button>
			</div>
		</>
	),
	() => <LinkField field="target" />,
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
						<LinkField field="target" />
						<Button size="small" onClick={() => EditorTransforms.unwrapNodes(editor, { at: [], match: node => node === props.element })}>
							{locale['Remove link']}
						</Button>
					</Box>
				</Dropdown>
			</span>
		</span>
	)
}
