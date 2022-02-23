import * as React from 'react'
import { Component, DateTimeField, LinkButton, Section, SlugField, TextField } from '@contember/admin'
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
				<PreviewLink slugField="slug" prefix="/form/" />
			}
			<DateTimeField
				field="publishAt"
				label={locale['Publish date']}
				defaultValue={new Date().toISOString()}
			/>
			<LinkButton to="responseList(id: $entity.id)">{locale['See responses']}</LinkButton>
		</>
	),
	'FormSideForm',
)

export const FormForm = Component(
	() => (
		<>
			<Section heading={locale['Content']}>
				<TextField field="title" label={locale['Title']} />
				<SlugField field="slug" label={locale['Url']} derivedFrom="title" unpersistedHardPrefix={(environment) => `${environment.getValue('WEB_URL')}/form/`} />
				<ContentField />
			</Section>
			<Section heading={locale['Fields']}>
				<FormInputs />
			</Section>
		</>
	),
	'FormForm',
)
