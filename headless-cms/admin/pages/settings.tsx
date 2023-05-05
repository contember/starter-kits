import { EditScope, PersistButton, Section } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { ContentField } from '../components/ContentField'
import { Directive, Title } from '../components/Directives'
import { ImageField } from '../components/ImageField'
import { Slots } from '../components/Slots'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Settings']}</Title>

		<EditScope
			entity="Setting(unique = One)"
			setOnCreate="(unique = One)"
		>
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>

			<Slots.ContentStack>
				<Section heading={locale['Logo']}>
					<ImageField label={locale['Logo']} field="logo" />
				</Section>

				<Section heading={locale['Footer']}>
					<ContentField field="footerCopyright.parts" label={locale['Footer copyright']} size="default" />
				</Section>
			</Slots.ContentStack>
		</EditScope>
	</>
)
