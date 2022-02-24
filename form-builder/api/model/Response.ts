import { SchemaDefinition as def } from '@contember/schema-definition'
import { FormInput } from './FormInput'
import { Form } from './Form'

export class Response {
	form = def.manyHasOne(Form, 'responses').notNull().cascadeOnDelete()
	answers = def.oneHasMany(ResponseAnswer, 'response')
	createdAt = def.dateTimeColumn().notNull().default('now')
}

export class ResponseAnswer {
	value = def.stringColumn().notNull()
	input = def.manyHasOne(FormInput).notNull()
	response = def.manyHasOne(Response, 'answers').notNull().cascadeOnDelete()
}
