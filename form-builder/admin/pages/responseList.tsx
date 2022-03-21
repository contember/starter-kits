import * as React from 'react'
import { DataBindingProvider, DataGrid, DateCell, EntitySubTree, FeedbackRenderer, Field, GenericCell, LayoutPage, LinkButton, NavigateBackButton, StaticRender } from '@contember/admin'
import locale from '../locales'

export default () => (
	<DataBindingProvider stateComponent={FeedbackRenderer}>
		<EntitySubTree entity="Form(id = $id)">
			<LayoutPage
				title={<>{locale['Responses from']} <Field field="title" /></>}
				navigation={<NavigateBackButton to="formList">{locale['Forms']}</NavigateBackButton>}
			>
				<DataGrid entities="Response[form.id = $id]" itemsPerPage={50}>
					<DateCell field="createdAt" header={locale['Created at']} initialOrder="desc" />
					<GenericCell shrunk>
						<LinkButton to="responseView(id: $entity.id)">{locale['View']}</LinkButton>
					</GenericCell>
				</DataGrid>
			</LayoutPage>
			<StaticRender>
				<Field field="title" />
			</StaticRender>
		</EntitySubTree>
	</DataBindingProvider>
)
