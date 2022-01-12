import * as React from 'react'
import {
	CreatePage,
	DataBindingProvider,
	DataGrid,
	DateCell,
	EditPage,
	EntityAccessor,
	EnumCell,
	FeedbackRenderer,
	GenericPage,
	PageLink,
	PageLinkButton,
	TextCell,
} from '@contember/admin'
import { PageForm, PageSideForm } from '../forms'

function clearSlugWhenPageHasType(entityAccessor: EntityAccessor.GetEntityAccessor) {
	const entity = entityAccessor()
	if (entity.getField('type').value !== 'default') {
		entity.getField('slug').updateValue(null)
	}
}

export const Pages = (
	<GenericPage
		pageName="pages"
		title="Pages"
		actions={<PageLinkButton to="pageCreate">Add new page</PageLinkButton>}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="Page" itemsPerPage={50}>
				<TextCell
					field="slug"
					header="Slug"
					format={(scalar) => <PageLink to="page(id: $entity.id)">{scalar}</PageLink>}
				/>
				<DateCell
					field="publishAt"
					header="Publish date"
				/>
				<EnumCell
					field="type"
					header="Type"
					options={{
						homePage: 'Home page',
						error404Page: 'Error 404',
					}}
				/>
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
)

export const PageCreate = (
	<CreatePage
		entity="Page"
		pageName="pageCreate"
		rendererProps={{
			title: 'Add page',
			side: <PageSideForm />,
		}}
		redirectOnSuccess={(request, id) => ({
			...request,
			pageName: 'page',
			parameters: {
				id,
			},
		})}
		onBeforePersist={(entityAccessor) => clearSlugWhenPageHasType(entityAccessor)}
	>
		<PageForm />
	</CreatePage>
)

export const Page = (
	<EditPage
		entity="Page(id=$id)"
		pageName="page"
		rendererProps={{
			title: 'Edit page',
			side: <PageSideForm isEditPage />,
		}}
		onBeforePersist={(entityAccessor) => clearSlugWhenPageHasType(entityAccessor)}
	>
		<PageForm />
	</EditPage>
)
