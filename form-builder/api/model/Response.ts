import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { FormInput } from './FormInput'
import { Form } from './Form'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	create: true,
})
export class Response {
	form = def.manyHasOne(Form, 'responses').notNull().cascadeOnDelete()
	answers = def.oneHasMany(ResponseAnswer, 'response')
	createdAt = def.dateTimeColumn().notNull().default('now')
}

@acl.allow(publicRole, {
	when: { response: acl.canCreate('answers') },
	create: true,
})
export class ResponseAnswer {
	value = def.stringColumn().notNull()
	input = def.manyHasOne(FormInput).notNull()
	response = def.manyHasOne(Response, 'answers').notNull().cascadeOnDelete()
}
