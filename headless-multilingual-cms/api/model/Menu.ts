import { SchemaDefinition as def } from '@contember/schema-definition'
import { Link } from './Link'
import { Locale } from './Locale'

export const MenuPositions = def.createEnum('header', 'footer')
export class Menu {
	locales = def.oneHasMany(MenuLocale, 'base')
	position = def.enumColumn(MenuPositions).unique().notNull()
}

@def.Unique('base', 'locale')
export class MenuLocale {
	base = def.manyHasOne(Menu, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'menus').notNull().cascadeOnDelete()

	items = def.oneHasMany(MenuItem, 'menu').orderBy('order')
}

export class MenuItem {
	order = def.intColumn().notNull()
	label = def.stringColumn()
	url = def.oneHasOne(Link).removeOrphan().setNullOnDelete()
	menu = def.manyHasOne(MenuLocale, 'items').notNull().cascadeOnDelete()
}
