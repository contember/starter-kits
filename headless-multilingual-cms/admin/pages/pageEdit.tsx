import * as React from 'react'
import { EditPage } from '@contember/admin'
import { clearSlugWhenPageHasRole, PageForm, PageSideForm } from '../forms/pageForms'
import locale from '../locales'

export default () => (
	<EditPage
		entity="Page(id=$id)"
		rendererProps={{ title: locale['Edit page'], side: <PageSideForm /> }}
		onBeforePersist={(entityAccessor) => clearSlugWhenPageHasRole(entityAccessor)}
	>
		<PageForm />
	</EditPage>
)
