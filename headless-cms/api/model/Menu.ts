import { SchemaDefinition as def } from '@contember/schema-definition'
import { Link } from './Link'

export const MenuPositions = def.createEnum('header', 'footer')
export class Menu {
	position = def.enumColumn(MenuPositions).unique().notNull()
	items = def.oneHasMany(MenuItem, 'menu').orderBy('order')
}

export class MenuItem {
	order = def.intColumn().notNull()
	label = def.stringColumn()
	url = def.oneHasOne(Link).removeOrphan().setNullOnDelete()
	menu = def.manyHasOne(Menu, 'items').notNull().cascadeOnDelete()
}
