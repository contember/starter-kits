import * as React from 'react'
import { Menu } from '@contember/admin'

export const SideMenu = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="Pages" to="pages" />
			<Menu.Item title="Articles" to="articles" />
			<Menu.Item title="Messages" to="messages" />
			<Menu.Item title="Settings" to="settings" />
			<Menu.Item title="Navigation" to="navigation" />
			<Menu.Item title="SEO">
				<Menu.Item title="Articles" to="seoArticles" />
				<Menu.Item title="Pages" to="seoPages" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
