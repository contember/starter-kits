import * as React from 'react'
import { EditPage, Section } from '@contember/admin'
import { ContentField } from '../components/ContentField'
import { LocaleSideDimension } from '../components/LocaleSideDimension'
import { ImageField } from '../components/ImageField'
import locale from '../locales'

export const settings = (
	<EditPage
		entity="Setting(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{ title: locale["Settings"] }}
	>
		<Section heading={locale["Logo"]}>
			<ImageField label={locale["Logo"]} field="logo" />
		</Section>
		<Section heading={locale["Footer"]}>
			<LocaleSideDimension>
				<ContentField field="footerCopyright.parts" label={locale["Footer copyright"]} size="default" />
			</LocaleSideDimension>
		</Section>
	</EditPage>
)
