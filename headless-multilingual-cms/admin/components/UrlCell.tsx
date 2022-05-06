import { Component, Environment, Scalar, TextCell, useEnvironment } from '@contember/admin'
import * as React from 'react'

export type UrlCellProps = {
	field: string,
	prefix?: string | ((environment: Environment) => string),
	header?: string,
	disableOrder?: boolean,
}

type UrlCellFromatProps = {
	value: Scalar,
	prefix?: string | ((environment: Environment) => string),
}

export const UrlCell = Component<UrlCellProps>(
	({ field, prefix, header, disableOrder }) => {
		return (
			<TextCell
				field={field}
				header={header}
				format={(value) => <UrlCellFormat value={value} prefix={prefix} />}
				disableOrder={disableOrder}
			/>
		)
	},
	'UrlCell',
)


const UrlCellFormat = ({ value, prefix }: UrlCellFromatProps) => {
	const environment = useEnvironment()
	const webUrl = environment.getValue('WEB_URL')
	const prefixValue = typeof prefix === 'function' ? prefix(environment) : prefix
	const url = prefixValue ? `${webUrl}/${prefixValue}` : `${webUrl}`

	return (
		<a href={`${url}/${value}`} target="_blank" rel="noreferrer">
			{`${url}/${value}`}
		</a>
	)
}
