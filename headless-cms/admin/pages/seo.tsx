import * as React from 'react'
import { MultiEditPage } from '@contember/admin'
import { SeoFields } from '../components/Seo'

export const seoArticles = (
	<MultiEditPage
		entities="Seo[article.id != null]"
		rendererProps={{
			title: 'SEO Articles',
			enableAddingNew: false,
			enableRemoving: false,
		}}
	>
		<SeoFields advancedOptions referenceEntity="article" />
	</MultiEditPage>
)

export const seoPages = (
	<MultiEditPage
		entities="Seo[page.id != null]"
		rendererProps={{
			title: 'SEO Pages',
			enableAddingNew: false,
			enableRemoving: false,
		}}
	>
		<SeoFields advancedOptions hasRoleField referenceEntity="page" />
	</MultiEditPage>
)
