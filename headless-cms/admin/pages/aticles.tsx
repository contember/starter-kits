import * as React from 'react'
import { CreatePage, DataGridPage, DateCell, EditPage, Link, LinkButton, TextCell } from '@contember/admin'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import locale from '../locales'

export const Articles = (
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
			format={(scalar) => <Link to="article(id: $entity.id)">{scalar}</Link>}
		/>
		<TextCell field="slug" header={locale["Url"]} />
		<DateCell field="publishAt" header={locale["Publish date"]} />
	</DataGridPage>
)

export const ArticleCreate = (
	<CreatePage
		entity="Article"
		pageName="articleCreate"
		rendererProps={{ title: locale["Add article"], side: <ArticleSideForm /> }}
		redirectOnSuccess="article(id: $entity.id)"
	>
		<ArticleForm />
	</CreatePage>
)

export const Article = (
	<EditPage
		entity="Article(id=$id)"
		pageName="article"
		rendererProps={{ title: locale["Edit article"], side: <ArticleSideForm isEditPage /> }}
	>
		<ArticleForm />
	</EditPage>
)
