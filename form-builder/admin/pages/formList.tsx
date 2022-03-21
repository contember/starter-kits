import * as React from 'react'
import { DataGridPage, DateCell, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export default () => (
	<DataGridPage
		entities="Form"
		itemsPerPage={50}
		rendererProps={{ title: locale['Forms'], actions: <LinkButton to="formCreate">{locale['Add form']}</LinkButton> }}
	>
		<TextCell field="title" header={locale['Title']} />
		<UrlCell field="slug" header={locale['Url']} prefix="form" />
		<DateCell field="publishAt" header={locale['Publish date']} />
		<TextCell field="details.responsesCount" header={locale['Number of responses']} />
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="formEdit(id: $entity.id)">{locale['Edit']}</LinkButton>
		</GenericCell>
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="responseList(id: $entity.id)">{locale['See responses']}</LinkButton>
		</GenericCell>
	</DataGridPage>
)
