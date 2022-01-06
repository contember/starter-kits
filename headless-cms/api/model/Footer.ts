import { SchemaDefinition as def } from '@contember/schema-definition'
import { Menu, One } from '.'

export class Footer {
	unique = def.enumColumn(One).notNull().unique()
	jsonContent = def.stringColumn()
	menu = def.oneHasOne(Menu)
}
