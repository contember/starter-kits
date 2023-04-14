import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	create: true,
})
export class ContactMessage {
	createdAt = def.dateTimeColumn().notNull().default('now')
	viewed = def.boolColumn().notNull().default(false)
	firstName = def.stringColumn()
	lastName = def.stringColumn()
	email = def.stringColumn()
	phone = def.stringColumn()
	message = def.stringColumn()
	consent = def.enumColumn(def.createEnum('yes')).notNull()
}
