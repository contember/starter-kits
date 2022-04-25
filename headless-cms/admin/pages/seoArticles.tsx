import * as React from 'react'
import { MultiEditPage } from '@contember/admin'
import { SeoFields } from '../components/Seo'
import locale from '../locales'

export default () => (
	<MultiEditPage
		entities="Seo[article.id != null]"
		pageName="seoArticles"
		rendererProps={{ title: locale['SEO articles'], enableAddingNew: false, enableRemoving: false }}
	>
		<SeoFields advancedOptions unpersistedHardPrefix="/blog" referenceEntity="article" />
	</MultiEditPage>
)
