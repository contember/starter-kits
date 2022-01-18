import * as React from 'react'
import { ArticleForm, ArticleSideForm, NavigationForm } from '../forms'
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
	TextCell,
	} from '@contember/admin'

export const Navigations = (
	<GenericPage
		pageName="navigations"
		title="Menus"
		actions={
			<LinkButton to="navigationCreate">Add new menu</LinkButton>
		}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="Menu" itemsPerPage={50}>
				<TextCell
					field="id"
					header="Id"
					format={(scalar) => <Link to="navigation(id: $entity.id)">{scalar}</Link>}
				/>
				<EnumCell
					field="position"
					header="Position"
					options={{
						header: 'Header',
						footer: 'Footer',
					}}
				/>
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
)

export const NavigationCreate = (
	<CreatePage
		entity="Menu"
		pageName="navigationCreate"
		rendererProps={{
			title: 'Add menu',
		}}
		redirectOnSuccess={(request, id) => ({
			...request,
			pageName: 'navigation',
			parameters: {
				id,
			},
		})}
	>
		<NavigationForm />
	</CreatePage>
)

export const Navigation = (
	<EditPage
		entity="Menu(id=$id)"
		pageName="navigation"
		rendererProps={{
			title: 'Edit menu',
		}}
	>
		<NavigationForm />
	</EditPage>
)
