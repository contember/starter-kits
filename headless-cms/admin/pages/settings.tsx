import * as React from 'react'

import { EditPage, HasOne, ImageUploadField, Section, TextField } from '@contember/admin'
import { ContentField } from '../components/ContentField'

export const settings = (
	<EditPage
		entity="Setting(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{ title: 'Settings' }}
	>
		<Section heading="Logo">
			<HasOne field="logo">
				<ImageUploadField label="Logo" urlField="url" widthField="width" heightField="height">
					<TextField field="alt" label="Alternative text" />
				</ImageUploadField>
			</HasOne>
		</Section>

		<Section heading="Footer">
			<ContentField field="footerCopyright.parts" label="Footer copyright" size="default" />
		</Section>
	</EditPage>
)
