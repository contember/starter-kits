import * as React from 'react'
import { Menu } from '@contember/admin'
import locale from '../locales'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title={locale['Forms']} to="formList" />
			<Menu.Item title={locale['Settings']} to="settings" />
		</Menu.Item>
	</Menu>
)
