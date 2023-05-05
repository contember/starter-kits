import { Link, Stack } from '@contember/admin'
import { Identity2023 } from '@contember/brand'
import * as React from 'react'
import { useDirectives } from './Directives'
import { Layouts } from './Layouts'
import { Navigation } from './Navigation'
import { Slots } from './Slots'
import { useDocumentTitle } from './useDocumentTitle.temporary'

// CMS Layout requires Contember Enterprise Edition (EE) license
// See https://github.com/contember/interface/blob/main/ee/LICENSE for more information.
const layout = 'cms' // 'default'
const LayoutComponent = Layouts[layout] ?? Layouts.default

export const Layout = (props: React.PropsWithChildren) => {
	const directives = useDirectives()
	useDocumentTitle(directives.title)

	return (
		<>
			<Slots.Title>
				<h1>{directives.title}</h1>
			</Slots.Title>

			<Slots.Logo>
				<Link to="index">
					<Stack align="center" direction="horizontal" gap="small">
						<Identity2023.Edit scale={2} /> CMS
					</Stack>
				</Link>
			</Slots.Logo>

			<Slots.Navigation>
				<Navigation />
			</Slots.Navigation>

			<LayoutComponent />

			{props.children}
		</>
	)
}
