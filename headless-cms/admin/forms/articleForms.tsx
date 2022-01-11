import * as React from 'react'
import {
	Component,
	DateTimeField,
	Section,
	SlugField,
	TextAreaField,
	TextField,
} from '@contember/admin'
import { ContentField, PreviewLink, Seo } from '../components'

type ArticleSideFormProps = {
	isEditPage?: boolean
}

export const ArticleSideForm = Component<ArticleSideFormProps>(
	({ isEditPage }) => (
		<>
			{isEditPage && <PreviewLink slugField="slug" prefix="/blog/" />}
			<DateTimeField
				field="publishAt"
				label="Publish date"
				defaultValue={new Date().toISOString()}
			/>
		</>
	),
	'ArticleSideForm'
)

export const ArticleForm = Component(
	() => (
		<>
			<TextField field="title" label="Title" />
			<SlugField field="slug" label="Slug" derivedFrom="title" unpersistedHardPrefix="/blog/" />
			<TextAreaField field="perex" label="Perex" />
			<ContentField label="Text" size="large" />
			<Seo titleDerivedFrom="title" descriptionDerivedFrom="perex" seoPage="seoArticles" />
		</>
	),
	'ArticleForm'
)
