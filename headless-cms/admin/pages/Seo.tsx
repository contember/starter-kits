import * as React from 'react'
import { MultiEditPage } from "@contember/admin"
import { SeoFields } from '../components'

export const SeoArticles = (
	<MultiEditPage
		entities="Seo[article.id != null]"
		pageName="seoArticles"
		rendererProps={
			{
				title: 'SEO Articles',
				enableAddingNew: false,
				enableRemoving: false,
			}
		}
	>
		<SeoFields advancedOptions referenceEntity="article" />
	</MultiEditPage>
)

export const SeoPages = (
	<MultiEditPage
		entities="Seo[page.id != null]"
		pageName="seoPages"
		rendererProps={
			{
				title: 'SEO Pages',
				enableAddingNew: false,
				enableRemoving: false,
			}
		}
	>
		<SeoFields advancedOptions hasRoleField referenceEntity="page" />
	</MultiEditPage>
)
