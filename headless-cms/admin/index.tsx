import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { ApplicationEntrypoint, Pages, runReactApp } from '@contember/admin'
import { Layout } from './components/Layout'
import '@contember/admin/style.css'
import './index.css'

runReactApp(
	<ApplicationEntrypoint
		basePath={import.meta.env.BASE_URL}
		apiBaseUrl={import.meta.env.VITE_CONTEMBER_ADMIN_API_BASE_URL}
		sessionToken={import.meta.env.VITE_CONTEMBER_ADMIN_SESSION_TOKEN}
		project={import.meta.env.VITE_CONTEMBER_ADMIN_PROJECT_NAME}
		stage="live"
		envVariables={{ WEB_URL: import.meta.env.VITE_CONTEMBER_ADMIN_WEB_URL }}
		children={<Pages layout={Layout} children={import.meta.glob('./pages/**/*.tsx', {eager: true})} />}
	/>,
	null,
	(dom, react, onRecoverableError) => createRoot(dom, { onRecoverableError }).render(react),
)
