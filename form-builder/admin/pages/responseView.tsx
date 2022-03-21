import * as React from 'react'
import { EditPage, Field, HasMany, NavigateBackButton, StaticRender } from '@contember/admin'

export default () => (
	<EditPage
		entity="Response(id = $id)"
		rendererProps={{
			actions: <></>,
			navigation: <NavigateBackButton to="responseList(id: $entity.form.id)">Responses</NavigateBackButton>,
		}}
	>
		<dl>
			<dt>Created at</dt>
			<dd><Field field="createdAt" /></dd>
			<HasMany field="answers">
				<dt><Field field="input.question" /></dt>
				<dd><Field field="value" /></dd>
			</HasMany>
		</dl>

		<StaticRender>
			<Field field="form.id" />
		</StaticRender>
	</EditPage>
)
