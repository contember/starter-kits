import * as React from 'react'
import { Menu } from '@contember/admin'
import locale from '../locales'

export const SideMenu = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title={locale["Pages"]} to="pages" />
			<Menu.Item title={locale["Articles"]} to="articles" />
			<Menu.Item title={locale["Messages"]} to="messages" />
			<Menu.Item title={locale["Settings"]} to="settings" />
			<Menu.Item title={locale["Navigation"]} to="navigations" />
			<Menu.Item title={locale["SEO"]}>
				<Menu.Item title={locale["Articles"]} to="seoArticles" />
				<Menu.Item title={locale["Pages"]} to="seoPages" />
			</Menu.Item>
		</Menu.Item>
	</Menu>
)
