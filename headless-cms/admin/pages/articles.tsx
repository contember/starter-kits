import * as React from 'react'
import { CreatePage, DataGridPage, DateCell, EditPage, Link, LinkButton, TextCell } from '@contember/admin'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'

export const articles = (
	<DataGridPage
		entities="Article"
		itemsPerPage={50}
		rendererProps={{ title: 'Articles', actions: <LinkButton to="articleCreate">Add new article</LinkButton> }}
	>
		<TextCell
			field="headline"
			header="Headline"
			format={(headline) => <Link to="article(id: $entity.id)">{headline}</Link>}
		/>
		<TextCell
			field="slug"
			header="Slug"
		/>
		<DateCell
			field="publishAt"
			header="Publish date"
		/>
	</DataGridPage>
)

export const articleCreate = (
	<CreatePage
		entity="Article"
		rendererProps={{ title: 'Add article', side: <ArticleSideForm /> }}
		redirectOnSuccess="article(id: $entity.id)"
	>
		<ArticleForm />
	</CreatePage>
)

export const article = (
	<EditPage
		entity="Article(id = $id)"
		rendererProps={{ title: 'Edit article', side: <ArticleSideForm isEditPage /> }}
	>
		<ArticleForm />
	</EditPage>
)
