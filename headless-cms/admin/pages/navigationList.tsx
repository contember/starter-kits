import { DataBindingProvider, EntityListSubTree, FeedbackRenderer, Field, LinkButton, TableCell, TableRenderer } from '@contember/admin'
import * as React from 'react'
import { LAYOUT_BREAKPOINT } from '../components/Constants'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={LAYOUT_BREAKPOINT} />

		<Title>{locale['Menus']}</Title>

		<Slots.Actions>
			<LinkButton to="navigationCreate">{locale['Add menu']}</LinkButton>
		</Slots.Actions>

		<Slots.Content>
			<DataBindingProvider stateComponent={FeedbackRenderer}>
				<EntityListSubTree entities="Menu" listComponent={TableRenderer}>
					<TableCell><Field field="position" /></TableCell>
					<TableCell justification="justifyEnd">
						<LinkButton to="navigationEdit(id: $entity.id)">{locale['Edit menu']}</LinkButton>
					</TableCell>
				</EntityListSubTree>
			</DataBindingProvider>
		</Slots.Content>
	</>
)
