import * as React from 'react'
import { EditPage } from '@contember/admin'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import locale from '../locales'

export default () => (
	<EditPage
		entity="Article(id=$id)"
		rendererProps={{ title: locale['Edit article'], side: <ArticleSideForm /> }}
	>
		<ArticleForm />
	</EditPage>
)
