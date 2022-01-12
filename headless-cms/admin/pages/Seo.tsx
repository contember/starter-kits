import * as React from 'react'
import { Field, MultiEditPage } from "@contember/admin"
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
		<h2><Field field="article.headline" /></h2>
		<SeoFields advancedOptions />
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
		<h2><Field field="page.title" /></h2>
		<SeoFields advancedOptions />
	</MultiEditPage>
)
