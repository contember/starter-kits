import * as React from 'react'
import { EditPage, Section } from '@contember/admin'
import { ContentField } from '../components/ContentField'
import { ImageField } from '../components/ImageField'
import locale from '../locales'

export default () => (
	<EditPage
		entity="Setting(unique = One)"
		setOnCreate="(unique = One)"
		rendererProps={{ title: locale['Settings'] }}
	>
		<Section heading={locale['Logo']}>
			<ImageField label={locale['Logo']} field="logo" />
		</Section>
		<Section heading={locale['Footer']}>
			<ContentField field="footerCopyright.parts" label={locale['Footer copyright']} size="default" />
		</Section>
	</EditPage>
)
