import * as React from 'react'
import { CreatePage, DataGridPage, EditPage, EnumCell, Link, LinkButton, TextCell } from '@contember/admin'
import { NavigationForm } from '../forms/navigationForms'
import {
	CreatePage,
	DataBindingProvider,
	DataGrid,
	EditPage,
	EnumCell,
	FeedbackRenderer,
	GenericPage,
	Link,
	LinkButton,
	TextCell
} from '@contember/admin'
import locale from '../locales'

	<DataGridPage
		entities="Menu"
		itemsPerPage={50}
		rendererProps={{
			title: locale["Menus"],
			actions: <LinkButton to="navigationCreate">{locale["Add menu"]}</LinkButton>
		}}
	>
		<TextCell
			field="id"
			header={locale["Id"]}
			format={(scalar) => <Link to="navigationEdit(id: $entity.id)">{scalar}</Link>}
		/>
		<EnumCell
			field="position"
			header={locale["Position"]}
			options={{ header: locale["Header"], footer: locale["Footer"] }}
		/>
	</DataGridPage>
)

export const NavigationCreate = (
	<CreatePage
		entity="Menu"
		rendererProps={{ title: locale["Add menu"] }}
		redirectOnSuccess="navigation(id: $entity.id)"
	>
		<NavigationForm />
	</CreatePage>
)

export const Navigation = (
	<EditPage
		entity="Menu(id=$id)"
		rendererProps={{ title: locale["Edit menu"] }}
	>
		<NavigationForm />
	</EditPage>
)
