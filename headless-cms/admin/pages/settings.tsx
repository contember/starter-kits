import * as React from 'react'
import { EditPage, HasOne, ImageUploadField, Section, TextField } from '@contember/admin'
import { ContentField } from '../components/ContentField'
import locale from '../locales'

export const settings = (
	<EditPage
		entity="Setting(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{title: locale["Settings"]}}
	>
		<Section heading={locale["Logo"]}>
			<HasOne field="logo">
				<ImageUploadField label={locale["Logo"]} urlField="url" widthField="width" heightField="height">
					<TextField field="alt" label={locale["Alternative text"]} />
				</ImageUploadField>
			</HasOne>
		</Section>

		<Section heading="Footer">
			<ContentField field="footerCopyright.parts" label={locale["Footer copyright"]} size="default" />
		</Section>
	</EditPage>
)
