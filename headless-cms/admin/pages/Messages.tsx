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
		title="Messages"
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="ContactMessage" itemsPerPage={50}>
				<BooleanCell
					field="viewed"
					header="Viewed"
					format={(date) => (!date && <span style={viewedDotStyle} />)}
				/>
				<DateCell
					field="createdAt"
					header="Create date"
					initialOrder="desc"
					format={(scalar) => <Link to="message(id: $entity.id)">{scalar.toLocaleString()}</Link>}
				/>
				<TextCell
					field="firstName"
					header="First name"
				/>
				<TextCell
					field="lastName"
					header="Last name"
				/>
				<TextCell field="email" header="E-mail" />
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
		<Field field="createdAt" /><br />
		<Field field="firstName" /><br />
		<Field field="lastName" /><br />
		<Field field="email" /><br />
		<Field field="phone" /><br />
		<Field field="message" />
	</EditPage>
)
