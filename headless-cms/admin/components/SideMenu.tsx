import * as React from 'react'
import { Menu } from '@contember/admin'

export const SideMenu = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="Articles" to="articles" />
			<Menu.Item title="Pages" to="pages" />
			<Menu.Item title="Messages" to="messages" />
			<Menu.Item title="Settings" >
				<Menu.Item title="Header" to="header" />
				<Menu.Item title="Footer" to="footer" />
			</Menu.Item>
			<Menu.Item title="SEO">
				<Menu.Item title="Articles" to="seoArticles" />
				<Menu.Item title="Pages" to="seoPages" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
