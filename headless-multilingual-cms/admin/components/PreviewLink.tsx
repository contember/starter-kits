import * as React from 'react'
import { Component, Environment, FieldView, useEnvironment } from '@contember/admin'
import locale from '../locales'

type PreviewLinkProps = {
	slugField: string,
	prefix?: string | ((environment: Environment) => string),
	path?: string
}

export const PreviewLink = Component<PreviewLinkProps>(
	({ slugField, path, prefix }) => (
		<FieldView
			field={slugField}
			render={({ value }) => {
				const environment = useEnvironment()
				const webUrl = environment.getValue('WEB_URL')
				const prefixValue = typeof prefix === 'function' ? prefix(environment) : prefix

				if (!path) {
					path = prefixValue ? `${prefixValue}${value}` : `/${value}`
				}

				return (
					<a href={`${webUrl}${path}`} target="_blank">
						{locale['Preview']}
					</a>
				)
			}}
		/>
	),
	'PreviewLink',
)
