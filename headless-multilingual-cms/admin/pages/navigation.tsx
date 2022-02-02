import * as React from 'react'
import { CreatePage, EditPage, Field, LinkButton, TableCell, TablePage } from '@contember/admin'
import { NavigationForm } from '../forms/navigationForms'
import locale from '../locales'

export const NavigationList = (
	<TablePage
		entities="MenuLocale[locale.code = $locale]"
		rendererProps={{
			title: locale["Menus"],
			actions: <LinkButton to="navigationCreate">{locale["Add menu"]}</LinkButton>
		}}
	>
		<TableCell><Field field="root.position" /></TableCell>
		<TableCell justification="justifyEnd">
			<LinkButton to="navigationEdit(id: $entity.root.id)">{locale['Edit menu']}</LinkButton>
		</TableCell>
	</TablePage>
)

export const NavigationCreate = (
	<CreatePage
		entity="Menu"
		rendererProps={{ title: locale["Add menu"] }}
		redirectOnSuccess="navigationEdit(id: $entity.id)"
	>
		<NavigationForm />
	</CreatePage>
)

export const NavigationEdit = (
	<EditPage
		entity="Menu(id=$id)"
		rendererProps={{ title: locale["Edit menu"] }}
	>
		<NavigationForm />
	</EditPage>
)
