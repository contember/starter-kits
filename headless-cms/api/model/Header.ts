import { SchemaDefinition as def } from '@contember/schema-definition'
import { Menu, One, Image } from '.'

export class Header {
	unique = def.enumColumn(One).notNull().unique()
	logo = def.manyHasOne(Image)
	menu = def.oneHasOne(Menu)
}
