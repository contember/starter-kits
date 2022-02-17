import * as React from 'react'
import { Component, DateTimeField, Section, SlugField, TextField } from '@contember/admin'
import { FormInputs } from '../components/FormInputs'
import { PreviewLink } from '../components/PreviewLink'
import locale from '../locales'
import { ContentField } from '../components/ContentField'

type FormSideFormProps = {
	isEditPage?: boolean
}

export const FormSideForm = Component<FormSideFormProps>(
	({ isEditPage }) => (
		<>
			{isEditPage &&
				<PreviewLink slugField="slug" />
			}
			<DateTimeField
				field="publishAt"
				label={locale['Publish date']}
				defaultValue={new Date().toISOString()}
			/>
		</>
	),
	'FormSideForm',
)

export const FormForm = Component(
	() => (
		<>
			<Section heading={locale['Content']}>
				<TextField field="slug" label={locale['Url']} />
				<ContentField />
			</Section>
			<Section heading={locale['Fields']}>
				<FormInputs />
			</Section>
		</>
	),
	'FormForm',
)
