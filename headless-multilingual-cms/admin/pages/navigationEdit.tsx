import * as React from 'react'
import { EditPage } from '@contember/admin'
import { NavigationForm } from '../forms/navigationForms'
import locale from '../locales'

export default () => (
	<EditPage
		entity="Menu(id=$id)"
		rendererProps={{ title: locale['Edit menu'] }}
	>
		<NavigationForm />
	</EditPage>
)
