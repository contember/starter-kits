import { Layout as DefaultLayout, LayoutPage } from '@contember/admin'
import { useLayoutSlotRegistryContext } from '@contember/layout'
import * as React from 'react'
import { SlotTargets, slotTargets } from '../Slots'

export const Layout = () => {
	const { activeSlots } = useLayoutSlotRegistryContext()

	return (
		<DefaultLayout
			sidebarHeader={activeSlots.has(slotTargets.Logo) ? <SlotTargets.Logo /> : null}
			navigation={activeSlots.has(slotTargets.Navigation) ? <SlotTargets.Navigation /> : null}
			children={(
				<LayoutPage
					navigation={activeSlots.has(slotTargets.Back) ? <SlotTargets.Back /> : null}
					actions={activeSlots.has(slotTargets.Actions) ? <SlotTargets.Actions /> : null}
					side={activeSlots.has(slotTargets.Sidebar) ? <SlotTargets.Sidebar /> : null}
					title={activeSlots.has(slotTargets.Title) ? <SlotTargets.Title /> : null}
				>
					<SlotTargets.Content />
				</LayoutPage>
			)}
		/>
	)
}
