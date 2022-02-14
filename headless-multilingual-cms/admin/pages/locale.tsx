import { MultiEditPage, TextField } from '@contember/admin'
import * as React from 'react'

export const LocaleList = (
	<MultiEditPage entities="Locale" rendererProps={{ title: 'Locales' }}>
		<TextField label="Code" field="code" />
		<TextField label="Label" field="label" />
	</MultiEditPage>
)
