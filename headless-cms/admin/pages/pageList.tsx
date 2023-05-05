import { DataGrid, EnumCell, Link, LinkButton, TextCell } from '@contember/admin'
import * as React from 'react'
import { Directive, Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { UrlCell } from '../components/UrlCell'
import locale from '../locales'

export default () => (
	<>
		<Directive name="cms-layout.content.maxWidth" content={null} />

		<Title>{locale['Pages']}</Title>

		<Slots.Actions>
			<LinkButton to="pageCreate">{locale['Add page']}</LinkButton>
		</Slots.Actions>

		<Slots.Content>
			<DataGrid
				entities="Page"
				itemsPerPage={50}
			>
				<TextCell
					field="seo.title"
					header={locale['Title']}
					format={(scalar) => <Link to="pageEdit(id: $entity.id)">{scalar}</Link>}
				/>
				<EnumCell
					field="role"
					header={locale['Role']}
					options={{
						homePage: locale['Home page'],
						error404Page: locale['Error 404'],
						blogPage: locale['Blog page'],
					}}
				/>
				<UrlCell field="slug" header={locale['Url']} />
			</DataGrid>
		</Slots.Content>
	</>
)
