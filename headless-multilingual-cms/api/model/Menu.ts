import { SchemaDefinition as def } from '@contember/schema-definition'
import { Link } from './Link'
import { Locale } from './Locale'

export const MenuPositions = def.createEnum('header', 'footer')
export class Menu {
	locales = def.oneHasMany(MenuLocale, 'root')
	position = def.enumColumn(MenuPositions).unique().notNull()
}

@def.Unique('root', 'locale')
export class MenuLocale {
	root: def.ManyHasOneDefinition = def.manyHasOne(Menu, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'menus').cascadeOnDelete().notNull()

	items = def.oneHasMany(MenuItem, 'menu').orderBy('order')
}

export class MenuItem {
	order = def.intColumn().notNull()
	label = def.stringColumn()
	url = def.oneHasOne(Link)
	menu = def.manyHasOne(MenuLocale, 'items').cascadeOnDelete().notNull()
}
