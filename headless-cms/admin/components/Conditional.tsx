import * as React from 'react'
import { Component, EntityAccessor, useEntity } from '@contember/admin'

export interface ConditionalProps {
	showIf: (accessor: EntityAccessor) => boolean
	additionalStaticChildren?: React.ReactNode
	children: React.ReactNode
}

export const Conditional = Component<ConditionalProps>(
	(props) => {
		const parentAccessor = useEntity()
		const show = props.showIf(parentAccessor)
		return show ? <>{props.children}</> : null
	},
	(props) => (
		<>
			{props.additionalStaticChildren}
			{props.children}
		</>
	),
	'Conditional',
)
