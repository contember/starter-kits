import * as React from 'react'
import { CreatePage } from '@contember/admin'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import locale from '../locales'

export default () => (
	<CreatePage
		entity="Article"
		rendererProps={{ title: locale['Add article'], side: <ArticleSideForm /> }}
		redirectOnSuccess="articleEdit(id: $entity.id)"
	>
		<ArticleForm />
	</CreatePage>
)
