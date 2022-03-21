import * as React from 'react'
import { EditPage, Field } from '@contember/admin'
import { ViewedMarker } from '../components/ViewedMarker'
import locale from '../locales'

export default () => (
	<EditPage
		entity="ContactMessage(id = $id)"
		rendererProps={{ title: locale['Show contact message'] }}
	>
		<ViewedMarker />
		{locale['Created at']}: <Field field="createdAt" /><br />
		{locale['First name']}: <Field field="firstName" /><br />
		{locale['Last name']}: <Field field="lastName" /><br />
		{locale['E-mail']}: <Field field="email" /><br />
		{locale['Phone number']}: <Field field="phone" /><br />
		{locale['Message']}: <Field field="message" />
	</EditPage>
)
