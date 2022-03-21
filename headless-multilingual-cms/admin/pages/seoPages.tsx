import * as React from 'react'
import { MultiEditPage } from '@contember/admin'
import { Seo } from '../components/Seo'
import locale from '../locales'

export default () => (
	<MultiEditPage
		entities="Page"
		pageName="seoPages"
		rendererProps={{ title: locale['SEO pages'], enableAddingNew: false, enableRemoving: false }}
	>
		<Seo advancedOptions hasRoleFiled />
	</MultiEditPage>
)
