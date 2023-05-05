import { DataBindingProvider, EntitySubTree, FeedbackRenderer, Field, NavigateBackLink, Stack } from '@contember/admin'
import * as React from 'react'
import { Title } from '../components/Directives'
import { Slots } from '../components/Slots'
import { ViewedMarker } from '../components/ViewedMarker'
import locale from '../locales'

export default () => (
	<>
		<Title>{locale['Show contact message']}</Title>

		<Slots.Back>
			<NavigateBackLink to="messageList">{locale['Back to messages']}</NavigateBackLink>
		</Slots.Back>

		<DataBindingProvider stateComponent={FeedbackRenderer}>
			<EntitySubTree entity="ContactMessage(id = $id)">
				<Slots.ContentStack>
					<ViewedMarker />
					<Stack direction="vertical">
						<h4 className="question">{locale['Created at']}:</h4>
						<h3 className="answer"><Field field="createdAt" /></h3>
						<h4 className="question">{locale['First name']}:</h4>
						<h3 className="answer"><Field field="firstName" /></h3>
						<h4 className="question">{locale['Last name']}:</h4>
						<h3 className="answer"><Field field="lastName" /></h3>
						<h4 className="question">{locale['E-mail']}:</h4>
						<h3 className="answer"><Field field="email" /></h3>
						<h4 className="question">{locale['Phone number']}:</h4>
						<h3 className="answer"><Field field="phone" /></h3>
						<h4 className="question">{locale['Message']}:</h4>
						<h3 className="answer"><Field field="message" /></h3>
					</Stack>
				</Slots.ContentStack>
			</EntitySubTree>
		</DataBindingProvider >
	</>
)
