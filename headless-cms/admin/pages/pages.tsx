import * as React from 'react'
import { CreatePage, DataGridPage, EditPage, EntityAccessor, EnumCell, Link, LinkButton, TextCell } from '@contember/admin'
import { PageForm, PageSideForm } from '../forms/pageForms'

function clearSlugWhenPageHasRole(getEntity: EntityAccessor.GetEntityAccessor) {
	const entity = getEntity()
	if (entity.getField('role').value !== null) {
		entity.getField('slug').updateValue(null)
	}
}

export const pages = (
	<DataGridPage
		entities="Page"
		itemsPerPage={50}
		rendererProps={{ title: 'Pages', actions: <LinkButton to="pageCreate">Add new page</LinkButton> }}
	>
		<TextCell
			field="seo.title"
			header="Title"
			format={(title) => <Link to="page(id: $entity.id)">{title}</Link>}
		/>
		<EnumCell
			field="role"
			header="Role"
			options={{
				homePage: 'Home page',
				error404Page: 'Error 404',
			}}
		/>
		<TextCell
			field="slug"
			header="URL"
			format={(slug) => <span>/{slug}</span>}
		/>
	</DataGridPage>
)

export const pageCreate = (
	<CreatePage
		entity="Page"
		rendererProps={{ title: 'Add page', side: <PageSideForm /> }}
		redirectOnSuccess="page(id: $entity.id)"
		onBeforePersist={(entity) => clearSlugWhenPageHasRole(entity)}
	>
		<PageForm />
	</CreatePage>
)

export const page = (
	<EditPage
		entity="Page(id = $id)"
		rendererProps={{ title: 'Edit page', side: <PageSideForm isEditPage /> }}
		onBeforePersist={(entity) => clearSlugWhenPageHasRole(entity)}
	>
		<PageForm />
	</EditPage>
)
