import * as React from 'react'
import { CreatePage } from '@contember/admin'
import { NavigationForm } from '../forms/navigationForms'
import locale from '../locales'

export default () => (
	<CreatePage
		entity="Menu"
		rendererProps={{ title: locale['Add menu'] }}
		redirectOnSuccess="navigationEdit(id: $entity.id)"
	>
		<NavigationForm />
	</CreatePage>
)
