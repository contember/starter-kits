import * as React from 'react'
import { CreatePage } from '@contember/admin'
import { FormForm, FormSideForm } from '../forms/formForms'
import locale from '../locales'

export default () => (
	<CreatePage
		entity="Form"
		rendererProps={{ title: locale['Add form'], side: <FormSideForm /> }}
		redirectOnSuccess="formEdit(id: $entity.id)"
	>
		<FormForm />
	</CreatePage>
)
