import * as React from 'react'
import { DataGridPage, EnumCell, Link, LinkButton, TextCell } from '@contember/admin'
import locale from '../locales'
import { UrlCell } from '../components/UrlCell'

export default () => (
	<DataGridPage
		entities="Page"
		itemsPerPage={50}
		rendererProps={{ title: locale['Pages'], actions: <LinkButton to="pageCreate">{locale['Add page']}</LinkButton> }}
	>
		<TextCell
			field="seo.title"
			header={locale['Title']}
			format={(scalar) => <Link to="pageEdit(id: $entity.id)">{scalar}</Link>}
		/>
		<EnumCell
			field="role"
			header={locale['Role']}
			options={{
				homePage: locale['Home page'],
				error404Page: locale['Error 404'],
				blogPage: locale['Blog page'],
			}}
		/>
		<UrlCell field="slug" header={locale['Url']} />
	</DataGridPage>
)
