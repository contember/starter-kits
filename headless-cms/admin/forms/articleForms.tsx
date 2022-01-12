import * as React from 'react'
import {
	Component,
	DateTimeField,
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
			<SlugField field="slug" label="Slug" derivedFrom="headline" unpersistedHardPrefix="/blog/" />
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
			<TextField field="headline" label="Headline" />
			<TextAreaField field="perex" label="Perex" />
			<ContentField label="Text" size="large" />
			<Seo
				titleDerivedFrom="headline"
				descriptionDerivedFrom="perex"
				seoPage="seoArticles"
			/>
		</>
	),
	'ArticleForm'
)
