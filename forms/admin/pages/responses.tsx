import * as React from 'react'
import { DataGridPage, DateCell, EditPage, Field, GenericCell, HasMany, HasOneSelectCell, LinkButton } from '@contember/admin'
import locale from '../locales'

export const responseList = (
	<DataGridPage
		entities="Response"
		itemsPerPage={50}
		rendererProps={{ title: locale['Responses'] }}
	>
		<HasOneSelectCell field="form" options="Form.slug" header="Form" />
		<DateCell field="createdAt" header="Created at" initialOrder="desc" />
		<GenericCell shrunk>
			<LinkButton to="responseView(id: $entity.id)">View</LinkButton>
		</GenericCell>
	</DataGridPage>
)

export const responseView = (
	<EditPage entity="Response(id = $id)">
		<Field field="createdAt" />
		<br /><br />
		<HasMany field="answers">
			<Field field="formQuestion.question" />
			<br />
			<Field field="value" />
			<br /><br />
		</HasMany>
	</EditPage>
)
