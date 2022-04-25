import * as React from 'react'
import { Component, DateTimeField, Section, TextareaField, TextField } from '@contember/admin'
import { PreviewLink } from '../components/PreviewLink'
import { ImageField } from '../components/ImageField'
import { Seo } from '../components/Seo'
import { ContentField } from '../components/ContentField'
import locale from '../locales'
import { LocaleSideDimension } from '../components/LocaleSideDimension'

export const ArticleSideForm = Component(
	() => (
		<LocaleSideDimension>
			<>
				<PreviewLink slugField="slug" prefix={(environment) => `/${environment.getValue('currentLocaleCode')}/blog/`} />
				<DateTimeField
					field="publishAt"
					label={locale['Publish date']}
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
			<Section heading={locale['Content']}>
				<LocaleSideDimension>
					<TextField field="headline" label={locale['Headline']} />
				</LocaleSideDimension>
				<ImageField field="coverPhoto" label={locale['Cover photo']} />
				<LocaleSideDimension>
					<TextareaField field="lead" label={locale['Lead']} />
					<ContentField label={locale['Text']} size="large" />
				</LocaleSideDimension>
			</Section>
			<Section heading="Seo">
				<Seo
					titleDerivedFrom="headline"
					descriptionDerivedFrom="lead"
					imageUrlDerivedFrom="base.coverPhoto.url"
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
