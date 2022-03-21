import { MultiEditPage, TextField } from '@contember/admin'
import * as React from 'react'

export default () => (
	<MultiEditPage entities="Locale" rendererProps={{ title: 'Locales' }}>
		<TextField label="Code" field="code" />
		<TextField label="Label" field="label" />
	</MultiEditPage>
)
