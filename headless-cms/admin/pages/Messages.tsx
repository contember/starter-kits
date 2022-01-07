import * as React from 'react'
import { ViewedMarker } from '../components'
import {
	DataBindingProvider,
	DataGrid,
	DateCell,
	EditPage,
	FeedbackRenderer,
	Field,
	GenericPage,
	PageLink,
	TextCell,
} from '@contember/admin'

export const Messages = (
	<GenericPage
		pageName="messages"
		title="Massages"
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="ContactMessage" itemsPerPage={50}>
				<TextCell
					field="firstName"
					header="First name"
					format={(scalar) => <PageLink to="message(id: $entity.id)">{scalar}</PageLink>}
				/>
				<TextCell
					field="lastName"
					header="Last name"
					format={(scalar) => <PageLink to="message(id: $entity.id)">{scalar}</PageLink>}
				/>
				<TextCell field="email" header="E-mail" />
				<DateCell field="createdAt" header="Create date" />
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
)


export const Message = (
	<EditPage
		entity="ContactMessage(id = $id)"
		pageName="message"
		rendererProps={{
			title: 'Show contact message',
		}}
	>
		<ViewedMarker />
		<Field field="craeteAt" />
		<Field field="firstName" />
		<Field field="lastName" />
		<Field field="email" />
		<Field field="phone" />
		<Field field="message" />
	</EditPage>
)
