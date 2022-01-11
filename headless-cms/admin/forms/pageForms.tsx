import * as React from 'react'
import {
	Conditional,
	ContentBlocks,
	PreviewLink,
	Seo
} from '../components'
import {
	Component,
	DateTimeField,
	Section,
	SelectField,
	SlugField,
	TextField,
} from '@contember/admin'

type PageSideFormProps = {
	isEditPage?: boolean
}

export const PageSideForm = Component<PageSideFormProps>(
	({ isEditPage }) => (
		<>
			{isEditPage &&
				<>
					<Conditional showIf={(accessor) => accessor.getField('type').value === 'default'}>
						<PreviewLink slugField="slug" />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('type').value === 'homePage'}>
						<PreviewLink slugField="slug" path={'/'} />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('type').value === 'error404Page'}>
						<PreviewLink slugField="slug" path={'/404'} />
					</Conditional>
				</>
			}
			<DateTimeField
				field="publishAt"
				label="Publish date"
				defaultValue={new Date().toISOString()}
			/>
			<SelectField
				field="type"
				label="Page type"
				defaultValue="default"
				options={[
					{ value: 'default', label: 'Default' },
					{ value: 'homePage', label: 'HomePage' },
					{ value: 'error404Page', label: "Error 404" }
				]}
			/>
		</>
	),
	'PageSideForm'
)

export const PageForm = Component(
	() => (
		<>
			<TextField field="title" label="Title" />
			<Conditional showIf={(accessor) => accessor.getField('type').value === 'default'}>
				<SlugField field="slug" label="Slug" derivedFrom="title" unpersistedHardPrefix="/" />
			</Conditional>
			<Section heading="Content">
				<ContentBlocks />
			</Section>
			<Seo titleDerivedFrom="title" seoPage="seoPages" />
		</>
	),
	'PageForm'
)
