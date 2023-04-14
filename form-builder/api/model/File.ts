import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	read: true,
})
export class File {
	url = def.stringColumn().notNull()
	size = def.intColumn()
	type = def.stringColumn()
	alt = def.stringColumn()
}
