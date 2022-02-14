import { SchemaDefinition as def } from '@contember/schema-definition'
import { Link } from './Link'

export const ButtonTypes = def.createEnum('primary', 'secondary')

export class Button {
	label = def.stringColumn().notNull()
	target = def.oneHasOne(Link).setNullOnDelete()
	type = def.enumColumn(ButtonTypes).notNull().default('primary')
}
