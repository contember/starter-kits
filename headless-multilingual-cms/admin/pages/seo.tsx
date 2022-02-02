import * as React from 'react'
import { MultiEditPage } from "@contember/admin"
import { SeoFields } from '../components/Seo'
import locale from '../locales'

export const SeoArticles = (
	<MultiEditPage
		entities="Seo[article.id != null]"
		pageName="seoArticles"
		rendererProps={{ title: locale["SEO articles"], enableAddingNew: false, enableRemoving: false }}
	>
		<SeoFields advancedOptions referenceEntity="article" />
	</MultiEditPage>
)

export const SeoPages = (
	<MultiEditPage
		entities="Seo[page.id != null]"
		pageName="seoPages"
		rendererProps={{ title: locale["SEO pages"], enableAddingNew: false, enableRemoving: false }}
	>
		<SeoFields advancedOptions hasRoleField referenceEntity="page" />
	</MultiEditPage>
)
