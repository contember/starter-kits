import { CreateScope, NavigateBackLink, PersistButton } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { PageForm, PageSideForm, clearSlugWhenPageHasRole } from '../forms/pageForms'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Add page']}</Title>

		<Slots.Back>
			<NavigateBackLink to="pageList">Back to pages</NavigateBackLink>
		</Slots.Back>

		<CreateScope
			entity="Page"
			redirectOnSuccess="pageEdit(id: $entity.id)"
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
		</CreateScope>
	</>
)
