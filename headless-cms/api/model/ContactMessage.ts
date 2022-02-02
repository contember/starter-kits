import { SchemaDefinition as def } from '@contember/schema-definition'

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
