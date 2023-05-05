import { MultiEditScope, PersistButton } from '@contember/admin'
import * as React from 'react'
import { Title } from '../components/Directives'
import { SeoFields } from '../components/Seo'
import { Slots } from '../components/Slots'
import locale from '../locales'

export default () => (
	<>
		<Title>{locale['SEO articles']}</Title>

		<Slots.ContentStack>
			<MultiEditScope entities="Seo[article.id != null]">
				<Slots.Actions>
					<PersistButton />
				</Slots.Actions>

				<SeoFields advancedOptions unpersistedHardPrefix="/blog" referenceEntity="article" />
			</MultiEditScope>
		</Slots.ContentStack>
	</>
)
