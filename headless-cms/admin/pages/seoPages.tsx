import { MultiEditScope, PersistButton } from '@contember/admin'
import * as React from 'react'
import { Title } from '../components/Directives'
import { SeoFields } from '../components/Seo'
import { Slots } from '../components/Slots'
import locale from '../locales'

export default () => (
	<>
		<Title>{locale['SEO pages']}</Title>

		<Slots.ContentStack>
			<MultiEditScope entities="Seo[page.id != null]">
				<Slots.Actions>
					<PersistButton />
				</Slots.Actions>

				<SeoFields advancedOptions hasRoleField referenceEntity="page" />
			</MultiEditScope>
		</Slots.ContentStack>
	</>
)
