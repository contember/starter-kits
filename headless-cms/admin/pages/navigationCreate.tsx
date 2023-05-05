import { CreateScope, NavigateBackLink, PersistButton } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { NavigationForm } from '../forms/navigationForms'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Add menu']}</Title>

		<Slots.Back>
			<NavigateBackLink to="navigationList">Back to navigation</NavigateBackLink>
		</Slots.Back>

		<CreateScope
			entity="Menu"
			redirectOnSuccess="navigationEdit(id: $entity.id)"
		>
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>

			<Slots.ContentStack>
				<NavigationForm />
			</Slots.ContentStack>
		</CreateScope>
	</>
)
