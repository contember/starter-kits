import * as React from 'react'
import {
	CreatePage,
	DataBindingProvider,
	DataGrid,
	EditPage,
	EntityAccessor,
	EnumCell,
	FeedbackRenderer,
	GenericPage,
	Link,
	LinkButton,
	TextCell,
} from '@contember/admin'
import { PageForm, PageSideForm } from '../forms/pageForms'
import locale from '../locales'

function clearSlugWhenPageHasType(getAccessor: EntityAccessor.GetEntityAccessor) {
	const entity = getAccessor()
	if (entity.getField('role').value !== null) {
		entity.getField('slug').updateValue(null)
	}
}

export const Pages = (
	<GenericPage
		pageName="pages"
		title={locale["Pages"]}
		actions={<LinkButton to="pageCreate">{locale["Add page"]}</LinkButton>}
	>
		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<DataGrid entities="Page" itemsPerPage={50}>
				<TextCell
					field="seo.title"
					header={locale["Title"]}
					format={(scalar) => <Link to="page(id: $entity.id)">{scalar}</Link>}
				/>
				<EnumCell
					field="role"
					header={locale["Role"]}
					options={{
						homePage: locale["Home page"],
						error404Page: locale["Error 404"],
						blogPage: locale["Blog page"],
					}}
				/>
				<TextCell
					field="slug"
					header={locale["Url"]}
					format={(slug) => <span>/{slug}</span>}
				/>
			</DataGrid>
		</DataBindingProvider>
	</GenericPage>
)

export const PageCreate = (
	<CreatePage
		entity="Page"
		pageName="pageCreate"
		rendererProps={{
			title: locale["Add page"],
			side: <PageSideForm />,
		}}
		redirectOnSuccess={(request, id) => ({
			...request,
			pageName: 'page',
			parameters: {
				id,
			},
		})}
		onBeforePersist={(entityAccessor) => clearSlugWhenPageHasType(entityAccessor)}
	>
		<PageForm />
	</CreatePage>
)

export const Page = (
	<EditPage
		entity="Page(id=$id)"
		pageName="page"
		rendererProps={{
			title: locale["Edit page"],
			side: <PageSideForm isEditPage />,
		}}
		onBeforePersist={(entityAccessor) => clearSlugWhenPageHasType(entityAccessor)}
	>
		<PageForm />
	</EditPage>
)
