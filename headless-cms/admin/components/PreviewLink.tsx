import * as React from 'react'
import { Component, FieldView, useEnvironment } from '@contember/admin'
import locale from '../locales'

type PreviewLinkProps = {
	slugField: string,
	prefix?: string,
	path?: string
}

export const PreviewLink = Component<PreviewLinkProps>(
	({ slugField, path, prefix }) => (
		<FieldView
			field={slugField}
			render={({ value, valueOnServer }) => {
				const webUrl = useEnvironment().getValue('WEB_URL')

				if (!valueOnServer && !path) {
					return null
				}

				if (!path) {
					path = prefix ? `${prefix}${value}` : `/${value}`
				}

				return (
					<a href={`${webUrl}${path}`} target="_blank" rel="noreferrer">
						{locale['Preview']}
					</a>
				)
			}}
		/>
	),
	'PreviewLink',
)
