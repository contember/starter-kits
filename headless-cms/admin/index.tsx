import { ApplicationEntrypoint, DataBindingProvider, FeedbackRenderer, PageModule, Pages, runReactApp } from '@contember/admin'
import '@contember/admin/index.css'
import '@contember/cms-layout/index.css'
import { LayoutSlotsProvider } from '@contember/layout'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { DirectivesProvider } from './components/Directives'
import { Layout } from './components/Layout'
import './index.css'

runReactApp(
	<DirectivesProvider>
		<ApplicationEntrypoint
			basePath={import.meta.env.BASE_URL}
			apiBaseUrl={import.meta.env.VITE_CONTEMBER_ADMIN_API_BASE_URL}
			sessionToken={import.meta.env.VITE_CONTEMBER_ADMIN_SESSION_TOKEN}
			project={import.meta.env.VITE_CONTEMBER_ADMIN_PROJECT_NAME}
			stage="live"
			envVariables={{ WEB_URL: import.meta.env.VITE_CONTEMBER_ADMIN_WEB_URL }}
			children={
				<DataBindingProvider stateComponent={FeedbackRenderer}>
					<LayoutSlotsProvider>
						<Pages children={import.meta.glob<PageModule>('./pages/**/*.tsx')} layout={Layout} />
					</LayoutSlotsProvider>
				</DataBindingProvider>
			}
		/>
	</DirectivesProvider>,
	null,
	(dom, react, onRecoverableError) => createRoot(dom, { onRecoverableError }).render(react),
)
