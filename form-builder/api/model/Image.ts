import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	read: true,
})
export class Image {
	url = def.stringColumn().notNull()
	width = def.intColumn()
	height = def.intColumn()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
}
