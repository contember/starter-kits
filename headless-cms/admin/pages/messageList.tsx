import * as React from 'react'
import { BooleanCell, DataGridPage, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import locale from '../locales'

const viewedDotStyle = {
	width: '0.5em',
	height: '0.5em',
	display: 'block',
	borderRadius: '50%',
	backgroundColor: 'rgb(var(--cui-theme-danger-500))',
}

export default () => (
	<DataGridPage entities="ContactMessage" itemsPerPage={50} rendererProps={{ title: locale['Messages'] }}>
		<BooleanCell
			field="viewed"
			shrunk
			canBeHidden={false}
			header={locale['Viewed']}
			format={(date) => (!date && <span style={viewedDotStyle} />)}
		/>
		<DateCell field="createdAt" header={locale['Create date']} initialOrder="desc" />
		<TextCell field="firstName" header={locale['First name']} />
		<TextCell field="lastName" header={locale['Last name']} />
		<TextCell field="email" header={locale['E-mail']} />
		<GenericCell>
			<LinkButton to="messageView(id: $entity.id)">{locale['Detail']}</LinkButton>
		</GenericCell>
	</DataGridPage>
)
