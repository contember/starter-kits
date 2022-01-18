import * as React from 'react'
import {
	Component,
	DateTimeField,
	TextAreaField,
	TextField,
} from '@contember/admin'
import { ContentField, ImageField, PreviewLink, Seo } from '../components'

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
			<TextField field="headline" label="Headline" />
			<ImageField field="coverPhoto" label="Cover photo" />
			<TextAreaField field="perex" label="Perex" />
			<ContentField label="Text" size="large" />
			<Seo
				titleDerivedFrom="headline"
				descriptionDerivedFrom="perex"
				seoPage="seoArticles"
				seoFieldsProps={{
					unpersistedHardPrefix: '/blog/',
				}}
			/>
		</>
	),
	'ArticleForm'
)
