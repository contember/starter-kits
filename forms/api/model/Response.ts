import { SchemaDefinition as def } from '@contember/schema-definition'
import { FormInput, FormOption } from './FormInput'
import { Form } from './Form'

export class Response {
	form = def.manyHasOne(Form, 'responses')
	answers = def.oneHasMany(ResponseAnswer, 'response')
	createdAt = def.dateTimeColumn().notNull().default('now')
}

export class ResponseAnswer {
	value = def.stringColumn()
	valueOption = def.manyHasOne(FormOption, 'responses')
	formQuestion = def.manyHasOne(FormInput, 'responses')
	response = def.manyHasOne(Response, 'answers')
}
