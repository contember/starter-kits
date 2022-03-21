import * as React from 'react'
import { MultiEditPage } from '@contember/admin'
import { Seo } from '../components/Seo'
import locale from '../locales'

export default () => (
	<MultiEditPage
		entities="Article"
		pageName="seoArticles"
		rendererProps={{ title: locale['SEO articles'], enableAddingNew: false, enableRemoving: false }}
	>
		<Seo advancedOptions />
	</MultiEditPage>
)
