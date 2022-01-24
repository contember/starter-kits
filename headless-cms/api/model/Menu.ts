import { SchemaDefinition as def } from "@contember/schema-definition"
import { Link } from "."

export const MenuPositions = def.createEnum('header', 'footer')
export class Menu {
	items = def.oneHasMany(MenuItem, 'menu').orderBy('order')
	position = def.enumColumn(MenuPositions).unique().notNull()
}

export class MenuItem {
	order = def.intColumn().notNull()
	label = def.stringColumn()
	url = def.oneHasOne(Link)
	menu = def.manyHasOne(Menu, 'items')
}
