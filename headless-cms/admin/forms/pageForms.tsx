import * as React from 'react'

import { Component, DateTimeField, EntityAccessor, Section, SelectField } from '@contember/admin'
import { ContentBlocks } from '../components/ContentBlocks'
import { Conditional } from '../components/Conditional'
import { PreviewLink } from '../components/PreviewLink'
import { Seo } from '../components/Seo'
import locale from '../locales'

export function clearSlugWhenPageHasRole(getEntityAccessor: EntityAccessor.GetEntityAccessor) {
	const entity = getEntityAccessor()
	if (entity.getField('role').value !== null) {
		entity.getField('slug').updateValue(null)
	}
}

export const PageSideForm = Component(
	() => (
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

			<DateTimeField
				field="publishAt"
				label={locale['Publish date']}
				defaultValue={new Date().toISOString()}
			/>
			<SelectField
				field="role"
				label={locale['Page role']}
				defaultValue={null}
				allowNull
				options={[
					{ value: null, label: locale['Default'] },
					{ value: 'homePage', label: locale['Home page'] },
					{ value: 'blogPage', label: locale['Blog'] },
					{ value: 'error404Page', label: locale['Error 404'] }
				]}
			/>
		</>
	),
	'PageSideForm',
)

export const PageForm = Component(
	() => (
		<>
			<Section heading={locale['Content']}>
				<ContentBlocks />
			</Section>
			<Seo
				seoPage="seoPages"
				seoFieldsProps={{
					hasRoleField: true,
				}}
			/>
		</>
	),
	'PageForm',
)
