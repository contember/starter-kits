import { Component, Scalar, StaticRender, TextCell, useEnvironment } from '@contember/admin'
import * as React from 'react'
import locale from '../locales'

export type UrlCellProps = {
	field: string,
	prefix?: string,
	header?: string,
}

type UrlCellFromatProps = {
	value: Scalar,
	prefix?: string,
}

export const UrlCell = Component<UrlCellProps>(
	({ field, prefix, header }) => {
		return (
			<TextCell
				field={field}
				header={header}
				format={(value) => <UrlCellFormat value={value} prefix={prefix} />}
			/>
		)
	},
	'UrlCell',
)


const UrlCellFormat = ({ value, prefix }: UrlCellFromatProps) => {
	const webUrl = useEnvironment().getValue('WEB_URL')
	const url = prefix ? `${webUrl}/${prefix}` : `${webUrl}`

	return (
		<a href={`${url}/${value}`} target="_blank" rel="noreferrer">
			{`${url}/${value}`}
		</a>
	)
}
