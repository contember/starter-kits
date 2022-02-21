import * as React from 'react'
import { CreatePage, DataGridPage, DateCell, EditPage, FieldView, GenericCell, LinkButton, TextCell } from '@contember/admin'
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
		<UrlCell field="slug" header={locale['Url']} prefix="form" />
		<DateCell field="publishAt" header={locale['Publish date']} />
		<TextCell field="details.responsesCount" header={locale['Number of responses']} />
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="formEdit(id: $entity.id)">{locale['Edit']}</LinkButton>
		</GenericCell>
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="responseList(id: $entity.id)" >{locale['See responses']}</LinkButton>
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
