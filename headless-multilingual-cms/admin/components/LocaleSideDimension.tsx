import * as React from 'react'
import { Component, SideDimensions, SideDimensionsProps } from '@contember/admin'

interface LocaleSideDimensionProps {
	children: React.ReactNode
	hasOneField?: SideDimensionsProps['hasOneField']
}

export const LocaleSideDimension = Component<LocaleSideDimensionProps>(
	({ children, hasOneField = 'locales(locale.code=$currentLocaleCode)' }) => (
		<SideDimensions
			dimension="locale"
			variableName="currentLocaleCode"
			hasOneField={hasOneField}
		>
			{children}
		</SideDimensions>
	),
)
