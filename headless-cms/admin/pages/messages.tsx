import * as React from 'react'
import { ViewedMarker } from '../components/ViewedMarker'
import { BooleanCell, DataGridPage, DateCell, EditPage, Field, Link, TextCell } from '@contember/admin'

const viewedDotStyle = {
	width: '0.5em',
	height: '0.5em',
	display: 'block',
	borderRadius: '50%',
	backgroundColor: 'rgb(var(--cui-theme-success-500))',
}

export const messages = (
	<DataGridPage
		entities="ContactMessage"
		itemsPerPage={50}
		rendererProps={{ title: 'Messages' }}
	>
		<BooleanCell
			field="viewed"
			header="Viewed"
			format={(date) => (!date && <span style={viewedDotStyle} />)}
		/>
		<DateCell
			field="createdAt"
			header="Create date"
			initialOrder="desc"
			format={(value) => <Link to="message(id: $entity.id)">{value.toLocaleString()}</Link>}
		/>
		<TextCell
			field="firstName"
			header="First name"
		/>
		<TextCell
			field="lastName"
			header="Last name"
		/>
		<TextCell
			field="email"
			header="E-mail"
		/>
	</DataGridPage>
)


export const message = (
	<EditPage
		entity="ContactMessage(id = $id)"
		rendererProps={{ title: 'Show contact message' }}
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
