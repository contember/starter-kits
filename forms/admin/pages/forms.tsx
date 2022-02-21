import * as React from 'react'
import { CreatePage, DataGridPage, EditPage, GenericCell, LinkButton } from '@contember/admin'
import { FormForm, FormSideForm } from '../forms/formForms'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export const FormList = (
	<DataGridPage
		entities="Form"
		itemsPerPage={50}
		rendererProps={{ title: locale['Forms'], actions: <LinkButton to="formCreate">{locale['Add form']}</LinkButton> }}
	>
		<TextCell field="title" header={locale['Title']} />
			<LinkButton to="formEdit(id: $entity.id)">{locale['Edit']}</LinkButton>
		</GenericCell>
	</DataGridPage>
)

export const FormCreate = (
	<CreatePage
		entity="Form"
		rendererProps={{ title: locale['Add form'], side: <FormSideForm /> }}
		redirectOnSuccess="formEdit(id: $entity.id)"
	>
		<FormForm />
	</CreatePage>
)

export const FormEdit = (
	<EditPage
		entity="Form(id=$id)"
		rendererProps={{ title: locale['Edit form'], side: <FormSideForm isEditPage /> }}
	>
		<FormForm />
	</EditPage>
)
