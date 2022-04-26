import * as React from 'react'
import { DataGridPage, EnumCell, Link, LinkButton, TextCell, useCurrentRequest } from '@contember/admin'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export default () => {
	const request = useCurrentRequest()

	return (
		<DataGridPage
			entities="Page"
			itemsPerPage={50}
			rendererProps={{ title: locale['Pages'], actions: <LinkButton to="pageCreate">{locale['Add page']}</LinkButton> }}
		>
			{request?.dimensions.locale.map(localeCode => (
				<TextCell
					field={`locales(locale.code = '${localeCode}').seo.title`}
					header={`${locale['Title']} (${localeCode})`}
					format={(scalar) => <Link to="pageEdit(id: $entity.id)">{scalar}</Link>}
					disableOrder
				/>
			))}
			<EnumCell
				field="role"
				header={locale['Role']}
				options={{
					homePage: locale['Home page'],
					error404Page: locale['Error 404'],
					blogPage: locale['Blog page'],
				}}
			/>
			{request?.dimensions.locale.map(localeCode => (
				<UrlCell
					field={`locales(locale.code = '${localeCode}').slug`}
					header={`${locale['Url']} (${localeCode})`}
					prefix={`${localeCode}`}
					disableOrder
				/>
			))}
		</DataGridPage>
	)
}
