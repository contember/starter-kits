import { CreateScope, NavigateBackLink, PersistButton } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Add article']}</Title>

		<Slots.Back>
			<NavigateBackLink to="articleList">Back to articles</NavigateBackLink>
		</Slots.Back>

		<CreateScope
			entity="Article"
			redirectOnSuccess="articleEdit(id: $entity.id)"
		>
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>

			<Slots.ContentStack>
				<ArticleForm />
			</Slots.ContentStack>

			<Slots.SidebarStack>
				<ArticleSideForm />
			</Slots.SidebarStack>
		</CreateScope>
	</>
)
