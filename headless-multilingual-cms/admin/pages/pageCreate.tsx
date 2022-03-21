import * as React from 'react'
import { CreatePage } from '@contember/admin'
import { clearSlugWhenPageHasRole, PageForm, PageSideForm } from '../forms/pageForms'
import locale from '../locales'

export default () => (
	<CreatePage
		entity="Page"
		rendererProps={{ title: locale['Add page'], side: <PageSideForm /> }}
		redirectOnSuccess="pageEdit(id: $entity.id)"
		onBeforePersist={(entityAccessor) => clearSlugWhenPageHasRole(entityAccessor)}
	>
		<PageForm />
	</CreatePage>
)
