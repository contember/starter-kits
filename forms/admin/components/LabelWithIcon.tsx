import * as React from 'react'
import { Component } from '@contember/admin'
import './LabelWithIcon.css'

type LabelWithIconProps = {
	icon: React.ReactNode
	label: string | React.ReactNode
}

export const LabelWithIcon = Component<LabelWithIconProps>(
	({ icon, label }) => (
		<span className="label-with-icon">
			{icon}
			<span>{label}</span>
		</span>
	),
	'Icon',
)
