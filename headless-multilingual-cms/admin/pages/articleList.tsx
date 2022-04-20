import * as React from 'react'
import { DataGridPage, DateCell, Link, LinkButton, TextCell, useCurrentRequest } from '@contember/admin'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export default () => {
	const request = useCurrentRequest()

	return (
		<DataGridPage
			entities="Article"
			itemsPerPage={50}
			rendererProps={{
				title: locale['Articles'],
				actions: <LinkButton to="articleCreate">{locale['Add article']}</LinkButton>,
			}}
		>
			{request?.dimensions.locale.map(localeCode => (
				<TextCell
					field={`locales(locale.code = '${localeCode}').headline`}
					header={`${locale['Headline']} (${localeCode})`}
					format={(scalar) => <Link to="articleEdit(id: $entity.id)">{scalar}</Link>}
					disableOrder
				/>
			))}
			{request?.dimensions.locale.map(localeCode => (
				<UrlCell
					field={`locales(locale.code = '${localeCode}').slug`}
					header={`${locale['Url']} (${localeCode})`}
					prefix={`${localeCode}/blog`}
					disableOrder
				/>
			))}
			{request?.dimensions.locale.map(localeCode => (
				<DateCell
					field={`locales(locale.code = '${localeCode}').publishAt`}
					header={`${locale['Publish date']} (${localeCode})`}
					disableOrder
				/>
			))}
		</DataGridPage>
	)
}
