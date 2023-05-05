import { EditScope, NavigateBackLink, PersistButton } from '@contember/admin'
import * as React from 'react'
import { Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { NavigationForm } from '../forms/navigationForms'
import locale from '../locales'

export default () => (
	<>
		<Title>{locale['Edit menu']}</Title>

		<Slots.Back>
			<NavigateBackLink to="navigationList">Back to navigation</NavigateBackLink>
		</Slots.Back>

		<EditScope entity="Menu(id=$id)">
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>

			<Slots.ContentStack>
				<NavigationForm />
			</Slots.ContentStack>
		</EditScope>
	</>
)
