import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Link } from './Link'
import { publicRole } from './acl'

export const MenuPositions = def.createEnum('header', 'footer')

@acl.allow(publicRole, {
	read: true,
})
export class Menu {
	position = def.enumColumn(MenuPositions).unique().notNull()
	items = def.oneHasMany(MenuItem, 'menu').orderBy('order')
}

@acl.allow(publicRole, {
	when: { menu: acl.canRead('items') },
	read: true,
})
export class MenuItem {
	order = def.intColumn().notNull()
	label = def.stringColumn()
	target = def.oneHasOne(Link).removeOrphan().setNullOnDelete()
	menu = def.manyHasOne(Menu, 'items').notNull().cascadeOnDelete()
}
