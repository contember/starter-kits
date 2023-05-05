// CMS Layout requires Contember Enterprise Edition (EE) license
// See https://github.com/contember/interface/blob/main/ee/LICENSE for more information.
import { DropdownContentContainerProvider } from '@contember/admin'
import '@contember/brand/index.css'
import { CMSLayout } from '@contember/cms-layout'
import '@contember/cms-layout/index.css'
import * as React from 'react'
import { useMemo } from 'react'
import { useDirectives } from '../Directives'

export const Layout = () => {
	const directives = useDirectives()

	return (
		<CMSLayout.Root
			breakpoint={directives['cms-layout.breakpoint']}
			contentProps={useMemo(() => ({
				basis: directives['cms-layout.content.basis'],
				maxWidth: directives['cms-layout.content.maxWidth'],
				minWidth: directives['cms-layout.content.minWidth'],
			}), [directives])}
			sidebarLeftProps={useMemo(() => ({
				keepVisible: directives['cms-layout.sidebarLeft.keepVisible'],
				width: directives['cms-layout.sidebarLeft.width'],
			}), [directives])}
			sidebarRightProps={useMemo(() => ({
				keepVisible: directives['cms-layout.sidebarRight.keepVisible'],
				width: directives['cms-layout.sidebarRight.width'],
			}), [directives])}
		>
			<DropdownContentContainerProvider />
			<div id="portal-root" />
		</CMSLayout.Root>
	)
}
