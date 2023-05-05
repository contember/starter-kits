import { BooleanCell, DataGrid, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import * as React from 'react'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import locale from '../locales'

const shared = {
	width: '0.5em',
	height: '0.5em',
	display: 'block',
	borderRadius: '50%',
}

const unreadViewedDotStyle = {
	...shared,
	backgroundColor: 'rgb(var(--cui-theme-danger-500))',
}

const readViewedDotStyle = {
	...shared,
	backgroundColor: 'rgb(var(--cui-theme-default-500))',
}

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={null} />

		<Title>{locale['Messages']}</Title>

		<Slots.Content>
			<DataGrid entities="ContactMessage" itemsPerPage={50}>
				<BooleanCell
					field="viewed"
					shrunk
					canBeHidden={false}
					header={locale['Viewed']}
					format={(date) => (<span style={date ? readViewedDotStyle : unreadViewedDotStyle} />)}
				/>
				<DateCell field="createdAt" header={locale['Create date']} initialOrder="desc" />
				<TextCell field="firstName" header={locale['First name']} />
				<TextCell field="lastName" header={locale['Last name']} />
				<TextCell field="email" header={locale['E-mail']} />
				<GenericCell>
					<LinkButton to="messageView(id: $entity.id)">{locale['Detail']}</LinkButton>
				</GenericCell>
			</DataGrid>
		</Slots.Content>
	</>
)
