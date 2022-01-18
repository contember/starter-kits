import * as React from 'react'
import { ContentField } from '../components'
import {
	EditPage,
	HasOne,
	ImageUploadField,
	Section,
	TextField
} from '@contember/admin'

export const Header = (
	<EditPage
		pageName="settings"
		entity="Setting(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{
			title: 'Settings',
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
		<Section heading="Footer">
			<ContentField field="footerCopyright.parts" label="Footer copyright" size="default" />
		</Section>
	</EditPage>
)