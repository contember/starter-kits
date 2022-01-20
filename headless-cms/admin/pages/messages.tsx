import * as React from 'react'
import { ViewedMarker } from '../components'
import {
	BooleanCell,
	DataBindingProvider,
	DataGrid,
	DateCell,
	EditPage,
	FeedbackRenderer,
	Field,
	GenericPage,
	Link,
	TextCell,
} from '@contember/admin'
import locale from '../locales'

const viewedDotStyle = {
	width: '0.5em',
	height: '0.5em',
	display: 'block',
	borderRadius: '50%',
	backgroundColor: 'rgb(var(--cui-theme-success-500))'
}

export const Messages = (
	<GenericPage
		pageName="messages"
		title={locale["Messages"]}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="ContactMessage" itemsPerPage={50}>
				<BooleanCell
					field="viewed"
					header={locale["Viewed"]}
					format={(date) => (!date && <span style={viewedDotStyle} />)}
				/>
				<DateCell
					field="createdAt"
					header={locale["Create date"]}
					initialOrder="desc"
					format={(scalar) => <Link to="message(id: $entity.id)">{scalar.toLocaleString()}</Link>}
				/>
				<TextCell
					field="firstName"
					header={locale["First name"]}
				/>
				<TextCell
					field="lastName"
					header={locale["Last name"]}
				/>
				<TextCell
					field="email"
					header={locale["E-mail"]}
				/>
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
)


export const Message = (
	<EditPage
		entity="ContactMessage(id = $id)"
		pageName="message"
		rendererProps={{
			title: locale["Show contact message"],
		}}
	>
		<ViewedMarker />
		{locale["Created at"]}: <Field field="createdAt" /><br />
		{locale["First name"]}: <Field field="firstName" /><br />
		{locale["Last name"]}: <Field field="lastName" /><br />
		{locale["E-mail"]}: <Field field="email" /><br />
		{locale["Phone number"]}: <Field field="phone" /><br />
		{locale["Message"]}: <Field field="message" />
	</EditPage>
)
