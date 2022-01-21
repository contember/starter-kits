import * as React from 'react'
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

export const Navigations = (
	<GenericPage
		title={locale["Menus"]}
		actions={
			<LinkButton to="navigationCreate">{locale["Add menu"]}</LinkButton>
		}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="Menu" itemsPerPage={50}>
				<TextCell
					field="id"
					header={locale["Id"]}
					format={(scalar) => <Link to="navigation(id: $entity.id)">{scalar}</Link>}
				/>
				<EnumCell
					field="position"
					header={locale["Position"]}
					options={{ header: locale["Header"], footer: locale["Footer"] }}
				/>
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
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
