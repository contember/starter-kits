import * as React from 'react'
import { CreatePage, DataGridPage, DateCell, EditPage, useEnvironment, Link, LinkButton, TextCell } from '@contember/admin'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export const ArticleList = (
	<DataGridPage
		entities="Article"
		itemsPerPage={50}
		rendererProps={{
			title: locale["Articles"],
			actions: <LinkButton to="articleCreate">{locale["Add article"]}</LinkButton>
		}}
	>
		<TextCell
			field="headline"
			header={locale["Headline"]}
			format={(scalar) => <Link to="articleEdit(id: $entity.id)">{scalar}</Link>}
		/>
		<UrlCell field="slug" header={locale['Url']} prefix="blog" />
		<DateCell field="publishAt" header={locale["Publish date"]} />
	</DataGridPage>
)

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
