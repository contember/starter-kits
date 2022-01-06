import { SchemaDefinition as def } from "@contember/schema-definition"

export class Menu {
	items = def.oneHasMany(MenuItem, 'menu')
}

export class MenuItem {
	order = def.intColumn().notNull()
	label = def.stringColumn()
	link = def.stringColumn()
	menu = def.manyHasOne(Menu, 'items')
}
