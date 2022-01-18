import * as React from 'react'
import { ArticleForm, ArticleSideForm } from '../forms'
import {
	CreatePage,
	DataBindingProvider,
	DataGrid,
	DateCell,
	EditPage,
	FeedbackRenderer,
	GenericPage,
	Link,
	LinkButton,
	TextCell,
} from '@contember/admin'

export const Articles = (
	<GenericPage
		pageName="articles"
		title="Articles"
		actions={
			<LinkButton to="articleCreate">Add new article</LinkButton>
		}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="Article" itemsPerPage={50}>
				<TextCell
					field="headline"
					header="Headline"
					format={(scalar) => <Link to="article(id: $entity.id)">{scalar}</Link>}
				/>
				<TextCell
					field="slug"
					header="Slug"
				/>
				<DateCell
					field="publishAt"
					header="Publish date"
				/>
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
)

export const ArticleCreate = (
	<CreatePage
		entity="Article"
		pageName="articleCreate"
		rendererProps={{
			title: 'Add article',
			side: <ArticleSideForm />,
		}}
		redirectOnSuccess={(request, id) => ({
			...request,
			pageName: 'article',
			parameters: {
				id,
			},
		})}
	>
		<ArticleForm />
	</CreatePage>
)

export const Article = (
	<EditPage
		entity="Article(id=$id)"
		pageName="article"
		rendererProps={{
			title: 'Edit article',
			side: <ArticleSideForm isEditPage />,
		}}
	>
		<ArticleForm />
	</EditPage>
)
