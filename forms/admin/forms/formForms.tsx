import * as React from 'react'
import { Component, DateTimeField, Section } from '@contember/admin'
import { FormBlocks } from '../components/FormBlocks'
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
				<ContentField />
			</Section>
			<Section heading={locale['Fields']}>
				<FormBlocks />
			</Section>
		</>
	),
	'FormForm',
)
