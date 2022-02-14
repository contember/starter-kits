import * as React from 'react'
import { MultiEditPage } from "@contember/admin"
import { Seo } from '../components/Seo'
import locale from '../locales'

export const SeoArticles = (
	<MultiEditPage
		entities="Article"
		pageName="seoArticles"
		rendererProps={{ title: locale['SEO articles'], enableAddingNew: false, enableRemoving: false }}
	>
		<Seo advancedOptions />
	</MultiEditPage>
)

export const SeoPages = (
	<MultiEditPage
		entities="Page"
		pageName="seoPages"
		rendererProps={{ title: locale['SEO pages'], enableAddingNew: false, enableRemoving: false }}
	>
		<Seo advancedOptions hasRoleFiled />
	</MultiEditPage>
)
