import * as React from 'react'
import { SchemaDefinition as def } from '@contember/schema-definition'
import { FormBlock } from './FormBlock'
import { Form } from './Form'

export class Response {
	form = def.manyHasOne(Form, 'responses')
}

export class ResponseAnswer {
	textAnswer = def.stringColumn()
	formQuestions = def.oneHasMany(FormBlock, 'responses').orderBy('order')
}
