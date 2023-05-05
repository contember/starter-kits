import { DataGrid, DateCell, Link, LinkButton, TextCell } from '@contember/admin'
import * as React from 'react'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={null} />

		<Title>{locale['Articles']}</Title>

		<Slots.Actions>
			<LinkButton to="articleCreate">{locale['Add article']}</LinkButton>
		</Slots.Actions>

		<Slots.Content>
			<DataGrid
				entities="Article"
				itemsPerPage={50}
			>
				<TextCell
					field="headline"
					header={locale['Headline']}
					format={(scalar) => <Link to="articleEdit(id: $entity.id)">{scalar}</Link>}
				/>
				<UrlCell field="slug" header={locale['Url']} prefix="blog" />
				<DateCell field="publishAt" header={locale['Publish date']} />
			</DataGrid>
		</Slots.Content>
	</>
)
