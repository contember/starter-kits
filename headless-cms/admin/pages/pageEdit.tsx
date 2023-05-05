import { EditScope, NavigateBackLink, PersistButton } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { PageForm, PageSideForm, clearSlugWhenPageHasRole } from '../forms/pageForms'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Edit page']}</Title>

		<Slots.Back>
			<NavigateBackLink to="pageList">Back to pages</NavigateBackLink>
		</Slots.Back>

		<EditScope
			entity="Page(id=$id)"
			onBeforePersist={(entityAccessor) => clearSlugWhenPageHasRole(entityAccessor)}
		>
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>

			<Slots.ContentStack>
				<PageForm />
			</Slots.ContentStack>

			<Slots.SidebarStack>
				<PageSideForm />
			</Slots.SidebarStack>
		</EditScope>
	</>
)
