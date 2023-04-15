import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Link } from './Link'
import { Locale } from './Locale'
import { publicRole } from './acl'

export const MenuPositions = def.createEnum('header', 'footer')

@acl.allow(publicRole, {
	read: true,
})
export class Menu {
	locales = def.oneHasMany(MenuLocale, 'base')
	position = def.enumColumn(MenuPositions).unique().notNull()
}

@acl.allow(publicRole, {
	when: { base: acl.canRead('locales') },
	read: true,
})
@def.Unique('base', 'locale')
export class MenuLocale {
	base = def.manyHasOne(Menu, 'locales').notNull().cascadeOnDelete()
	locale = def.manyHasOne(Locale, 'menus').notNull().cascadeOnDelete()

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
	menu = def.manyHasOne(MenuLocale, 'items').notNull().cascadeOnDelete()
}
