import * as React from 'react'
import { Component, DateTimeField, TextareaField, TextField } from '@contember/admin'
import { PreviewLink } from '../components/PreviewLink'
import { ImageField } from '../components/ImageField'
import { Seo } from '../components/Seo'
import { ContentField } from '../components/ContentField'
import locale from '../locales'

export const ArticleSideForm = Component(
	() => (
		<>
			<PreviewLink slugField="slug" prefix="/blog/" />
			<DateTimeField
				field="publishAt"
				label={locale['Publish date']}
				defaultValue={new Date().toISOString()}
			/>
		</>
	),
	'ArticleSideForm',
)

export const ArticleForm = Component(
	() => (
		<>
			<TextField field="headline" label={locale['Headline']} />
			<ImageField field="coverPhoto" label={locale['Cover photo']} />
			<TextareaField field="lead" label={locale['Lead']} />
			<ContentField label={locale['Text']} size="large" />
			<Seo
				titleDerivedFrom="headline"
				descriptionDerivedFrom="lead"
				imageUrlDerivedFrom="coverPhoto.url"
				seoPage="seoArticles"
				seoFieldsProps={{
					unpersistedHardPrefix: '/blog',
				}}
			/>
		</>
	),
	'ArticleForm',
)
