import * as React from 'react'
import { CreatePage, DataGridPage, DateCell, EditPage, Link, LinkButton, TextCell, useCurrentRequest } from '@contember/admin'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export const ArticleList = () => {
	const request = useCurrentRequest()

	return (
		<DataGridPage
			entities="Article"
			itemsPerPage={50}
			rendererProps={{
				title: locale["Articles"],
				actions: <LinkButton to="articleCreate">{locale["Add article"]}</LinkButton>
			}}
		>
			{request?.dimensions.locale.map(localeCode => (
				<TextCell
					field={`locales(locale.code = '${localeCode}').headline`}
					header={`${locale["Headline"]} (${localeCode})`}
					format={(scalar) => <Link to="articleEdit(id: $entity.id)">{scalar}</Link>}
				/>
			))}
			{request?.dimensions.locale.map(localeCode => (
				<UrlCell field={`locales(locale.code = '${localeCode}').slug`} header={`${locale['Url']} (${localeCode})`} prefix="blog" />
			))}
			{request?.dimensions.locale.map(localeCode => (
				<DateCell field={`locales(locale.code = '${localeCode}').publishAt`} header={`${locale["Publish date"]} (${localeCode})`} />
			))}
		</DataGridPage >
	)
}

export const ArticleCreate = (
	<CreatePage
		entity="Article"
		rendererProps={{ title: locale["Add article"], side: <ArticleSideForm /> }}
		redirectOnSuccess="articleEdit(id: $entity.id)"
	>
		<ArticleForm />
	</CreatePage>
)

export const ArticleEdit = (
	<EditPage
		entity="Article(id=$id)"
		rendererProps={{ title: locale["Edit article"], side: <ArticleSideForm isEditPage /> }}
	>
		<ArticleForm />
	</EditPage>
)
