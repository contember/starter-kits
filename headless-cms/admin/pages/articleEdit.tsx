import { EditScope, NavigateBackLink, PersistButton } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { ArticleForm, ArticleSideForm } from '../forms/articleForms'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Edit article']}</Title>

		<Slots.Back>
			<NavigateBackLink to="articleList">Back to articles</NavigateBackLink>
		</Slots.Back>

		<EditScope entity="Article(id=$id)">
			<Slots.Actions>
				<PersistButton />
			</Slots.Actions>

			<Slots.ContentStack>
				<ArticleForm />
			</Slots.ContentStack>

			<Slots.SidebarStack>
				<ArticleSideForm />
			</Slots.SidebarStack>
		</EditScope>
	</>
)
