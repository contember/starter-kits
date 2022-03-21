import * as React from 'react'
import { Field, LinkButton, TableCell, TablePage } from '@contember/admin'
import locale from '../locales'

export default () => (
	<TablePage
		entities="Menu"
		rendererProps={{
			title: locale['Menus'],
			actions: <LinkButton to="navigationCreate">{locale['Add menu']}</LinkButton>,
		}}
	>
		<TableCell><Field field="position" /></TableCell>
		<TableCell justification="justifyEnd">
			<LinkButton to="navigationEdit(id: $entity.id)">{locale['Edit menu']}</LinkButton>
		</TableCell>
	</TablePage>
)
