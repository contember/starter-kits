import * as React from 'react'
import { ReactNode } from 'react'
import { DimensionsSwitcher, Layout as ContemberLayout } from '@contember/admin'
import { Navigation } from './Navigation'

export const Layout = (props: { children?: ReactNode }) => (
	<ContemberLayout
		sidebarHeader="Contember"
		navigation={<Navigation />}
		switchers={
			<DimensionsSwitcher
				optionEntities="Locale"
				orderBy="code asc"
				dimension="locale"
				labelField="code"
				slugField="code"
				maxItems={2}
			/>
		}
	>
		{props.children}
	</ContemberLayout >
)
