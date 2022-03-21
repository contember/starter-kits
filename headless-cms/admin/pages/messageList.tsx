import * as React from 'react'
import { BooleanCell, DataGridPage, DateCell, Link, TextCell } from '@contember/admin'
import locale from '../locales'

const viewedDotStyle = {
	width: '0.5em',
	height: '0.5em',
	display: 'block',
	borderRadius: '50%',
	backgroundColor: 'rgb(var(--cui-theme-success-500))',
}

export default () => (
	<DataGridPage
		entities="ContactMessage"
		itemsPerPage={50}
		rendererProps={{ title: locale['Messages'] }}
	>
		<BooleanCell
			field="viewed"
			header={locale['Viewed']}
			format={(date) => (!date && <span style={viewedDotStyle} />)}
		/>
		<DateCell
			field="createdAt"
			header={locale['Create date']}
			initialOrder="desc"
			format={(scalar) => <Link to="messageEdit(id: $entity.id)">{scalar.toLocaleString()}</Link>}
		/>
		<TextCell field="firstName" header={locale['First name']} />
		<TextCell field="lastName" header={locale['Last name']} />
		<TextCell field="email" header={locale['E-mail']} />
	</DataGridPage>
)
