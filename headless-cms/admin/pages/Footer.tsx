import * as React from 'react'
import { EditPage, Repeater, RichTextField, Section } from '@contember/admin'

export const Footer = (
	<EditPage
		pageName="footer"
		entity="Footer(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{
			title: 'Footer',
		}}
	>
		<Section heading="Content">
			<RichTextField field="jsonContent" label={undefined} />
		</Section>
		<Section heading="Menu">
			<Repeater field="menu.items" label="Item" sortableBy="order">
				<RichTextField field="label" label="Label" />
			</Repeater>
		</Section>
	</EditPage>
)
