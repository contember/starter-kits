import * as React from 'react'
import { EditPage, HasOne, ImageUploadField, Repeater, RichTextField, Section, TextField } from '@contember/admin'

export const Header = (
	<EditPage
		pageName="header"
		entity="Header(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{
			title: 'Header',
		}}
	>
		<Section heading="Logo">
			<HasOne field="logo">
				<ImageUploadField
					label="Logo"
					urlField="url"
					widthField="width"
					heightField="height"
				>
					<TextField field="alt" label="Alternative text" />
				</ImageUploadField>
			</HasOne>
		</Section>
		<Section heading="Menu">
			<Repeater field="menu.items" label="Item" sortableBy="order">
				<RichTextField field="label" label="Label" />
			</Repeater>
		</Section>
	</EditPage>
)
