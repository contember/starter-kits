import * as React from 'react'
import { Component, SideDimensions, SideDimensionsProps, Variable } from '@contember/admin'

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
			variables={currentLocaleCode => {
				return {
					labelMiddleware: label => (
						<>
							<Variable name="flag" /> {label} ({currentLocaleCode})
						</>
					),
				}
			}}
		>
			{children}
		</SideDimensions>
	),
)
