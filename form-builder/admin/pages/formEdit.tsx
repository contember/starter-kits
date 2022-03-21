import * as React from 'react'
import { EditPage } from '@contember/admin'
import { FormForm, FormSideForm } from '../forms/formForms'
import locale from '../locales'

export default () => (
	<EditPage
		entity="Form(id=$id)"
		rendererProps={{ title: locale['Edit form'], side: <FormSideForm /> }}
	>
		<FormForm />
	</EditPage>
)
