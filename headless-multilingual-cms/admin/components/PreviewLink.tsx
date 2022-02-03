import * as React from 'react'
import { Component, Environment, Field, useEnvironment, useField } from '@contember/admin'
import locale from '../locales'

type PreviewLinkProps = {
	slugField: string,
	prefix?: string | ((environment: Environment) => string),
	path?: string
}

export const PreviewLink = Component<PreviewLinkProps>(
	({ slugField, path, prefix }) => {
		const environment = useEnvironment()
		const webUrl = environment.getValue('WEB_URL')
		const { value: slug } = useField<string>(slugField)
		const prefixValue = typeof prefix === 'function' ? prefix(environment) : prefix

		if (!path) {
			path = prefixValue ? `${prefixValue}${slug}` : `/${slug}`
		}

		return (
			<a href={`${webUrl}${path}`} target="_blank">
				{locale["Preview"]}
			</a>
		)
	},
	({ slugField }) => (
		<Field field={slugField} />
	),
	'PreviewLink',
)
