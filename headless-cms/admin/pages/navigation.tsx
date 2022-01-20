import * as React from 'react'
import { NavigationForm } from '../forms/navigationForms'
import { CreatePage, DataGridPage, EditPage, EnumCell, Link, LinkButton, TextCell } from '@contember/admin'

export const navigations = (
	<DataGridPage
		entities="Menu"
		itemsPerPage={50}
		rendererProps={{ title: 'Menus', actions: <LinkButton to="navigationCreate">Add new menu</LinkButton> }}
	>
		<TextCell
			field="id"
			header="Id"
			format={(id) => <Link to="navigation(id: $entity.id)">{id}</Link>}
		/>
		<EnumCell
			field="position"
			header="Position"
			options={{
				header: 'Header',
				footer: 'Footer',
			}}
		/>
	</DataGridPage>
)

export const navigationCreate = (
	<CreatePage
		entity="Menu"
		rendererProps={{ title: 'Add menu' }}
		redirectOnSuccess="navigation(id: $entity.id)"
	>
		<NavigationForm />
	</CreatePage>
)

export const navigation = (
	<EditPage
		entity="Menu(id = $id)"
		rendererProps={{ title: 'Edit menu' }}
	>
		<NavigationForm />
	</EditPage>
)
