import { Component, Scalar, StaticRender, TextCell, useEnvironment } from '@contember/admin'
import * as React from 'react'
import locale from '../locales'

export type UrlCellProps = {
	field: string,
	prefix?: string,
	header?: string,
}

type UrlCellFromatProps = {
	scalar: Scalar,
	prefix?: string,
}

export const UrlCell = Component<UrlCellProps>(
	({ field, prefix, header }) => {
		return (
			<TextCell
				field={field}
				header={header}
				format={(scalar) => <UrlCellFormat scalar={scalar} prefix={prefix} />}
			/>
		)
	},
	'UrlCell',
)


const UrlCellFormat = ({ scalar, prefix }: UrlCellFromatProps) => {
	const webUrl = useEnvironment().getValue('WEB_URL')
	const url = prefix ? `${webUrl}/${prefix}` : `${webUrl}`

	return (
		<a href={`${url}/${scalar}`} target="_blank">
			{`${url}/${scalar}`}
		</a>
	)
}
