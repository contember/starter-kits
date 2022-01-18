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
} from '@contember/admin'

type PageSideFormProps = {
	isEditPage?: boolean
}

export const PageSideForm = Component<PageSideFormProps>(
	({ isEditPage }) => (
		<>

			{isEditPage &&
				<>
					<Conditional showIf={(accessor) => accessor.getField('role').value === null}>
						<PreviewLink slugField="slug" />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('role').value === 'homePage'}>
						<PreviewLink slugField="slug" path={'/'} />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('role').value === 'blogPage'}>
						<PreviewLink slugField="slug" path={'/blog'} />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('role').value === 'error404Page'}>
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
				field="role"
				label="Page role"
				defaultValue={null}
				allowNull
				options={[
					{ value: null, label: 'Default' },
					{ value: 'homePage', label: 'HomePage' },
					{ value: 'blogPage', label: "Blog" },
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
			<Section heading="Content">
				<ContentBlocks />
			</Section>
			<Seo
				seoPage="seoPages"
				seoFieldsProps={{
					unpersistedHardPrefix: '/',
					hasRoleField: true
				}}
			/>
		</>
	),
	'PageForm'
)
