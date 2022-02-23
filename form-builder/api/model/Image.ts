import { SchemaDefinition as def } from '@contember/schema-definition'

export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
}
