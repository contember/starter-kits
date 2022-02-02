import * as React from 'react'
import { Component, DateTimeField, TextAreaField, TextField } from '@contember/admin'
import { PreviewLink } from '../components/PreviewLink'
import { ImageField } from '../components/ImageField'
import { Seo } from '../components/Seo'
import { ContentField } from '../components/ContentField'
import locale from '../locales'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

type ArticleSideFormProps = {
	isEditPage?: boolean
}

export const ArticleSideForm = Component<ArticleSideFormProps>(
	({ isEditPage }) => (
		<>
			{isEditPage &&
				<LocaleSideDimension>
					<PreviewLink slugField="slug" prefix="/blog/" />
				</LocaleSideDimension>
			}
			<LocaleSideDimension>
				<DateTimeField
					field="publishAt"
					label={locale["Publish date"]}
					defaultValue={new Date().toISOString()}
				/>
			</LocaleSideDimension>
		</>
	),
	'ArticleSideForm',
)

export const ArticleForm = Component(
	() => (
		<>
			<LocaleSideDimension>
				<TextField field="headline" label={locale["Headline"]} />
				<ImageField field="coverPhoto" label={locale["Cover photo"]} />
				<TextAreaField field="perex" label={locale["Perex"]} />
				<ContentField label={locale["Text"]} size="large" />
			</LocaleSideDimension>
			<Seo
				titleDerivedFrom="headline"
				descriptionDerivedFrom="perex"
				imageUrlDerivedFrom="coverPhoto.url"
				seoPage="seoArticles"
				seoFieldsProps={{
					unpersistedHardPrefix: '/blog/',
				}}
			/>
		</>
	),
	'ArticleForm',
)
