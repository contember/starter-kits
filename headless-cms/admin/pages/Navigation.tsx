import * as React from 'react'
import { CreatePage, DataBindingProvider, DataGrid, DateCell, EditPage, EnumCell, FeedbackRenderer, GenericPage, PageLink, PageLinkButton, Repeater, SelectField, TextCell, TextField } from '@contember/admin'
import { ArticleForm, ArticleSideForm, NavigationForm } from '../forms'
import { LinkField } from '../components'

export const Navigations = (
	<GenericPage
		pageName="navigations"
		title="Menus"
		actions={
			<PageLinkButton to="navigationCreate">Add new menu</PageLinkButton>
		}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="Menu" itemsPerPage={50}>
				<TextCell
					field="id"
					header="Id"
					format={(scalar) => <PageLink to="navigation(id: $entity.id)">{scalar}</PageLink>}
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
