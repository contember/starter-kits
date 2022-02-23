import { SchemaDefinition as def } from '@contember/schema-definition'

export class File {
	url = def.stringColumn().notNull()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
}
