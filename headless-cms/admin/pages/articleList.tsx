import * as React from 'react'
import { DataGridPage, DateCell, Link, LinkButton, TextCell } from '@contember/admin'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export default () => (
	<DataGridPage
		entities="Article"
		itemsPerPage={50}
		rendererProps={{
			title: locale['Articles'],
			actions: <LinkButton to="articleCreate">{locale['Add article']}</LinkButton>,
		}}
	>
		<TextCell
			field="headline"
			header={locale['Headline']}
			format={(scalar) => <Link to="articleEdit(id: $entity.id)">{scalar}</Link>}
		/>
		<UrlCell field="slug" header={locale['Url']} prefix="blog" />
		<DateCell field="publishAt" header={locale['Publish date']} />
	</DataGridPage>
)
