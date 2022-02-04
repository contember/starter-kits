import * as React from 'react'
import { Component, DateTimeField, Section, TextAreaField, TextField } from '@contember/admin'
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
		<LocaleSideDimension>
			<>
				{isEditPage &&
					<PreviewLink slugField="slug" prefix={(environment) => `/${environment.getValue('currentLocaleCode')}/blog/`} />
				}
				<DateTimeField
					field="publishAt"
					label={locale["Publish date"]}
					defaultValue={new Date().toISOString()}
				/>
			</>
		</LocaleSideDimension>
	),
	'ArticleSideForm',
)

export const ArticleForm = Component(
	() => (
		<>
			<Section heading={locale["Content"]}>
				<LocaleSideDimension>
					<TextField field="headline" label={locale["Headline"]} />
					<ImageField field="root.coverPhoto" label={locale["Cover photo"]} />
					<TextAreaField field="perex" label={locale["Perex"]} />
					<ContentField label={locale["Text"]} size="large" />
				</LocaleSideDimension>
			</Section>
			<Section heading="Seo">
				<Seo
					titleDerivedFrom="headline"
					descriptionDerivedFrom="perex"
					imageUrlDerivedFrom="root.coverPhoto.url"
					seoPage="seoArticles"
					seoFieldsProps={{
						unpersistedHardPrefix: '/blog/',
					}}
				/>
			</Section>
		</>
	),
	'ArticleForm',
)
