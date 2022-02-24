import { SchemaDefinition as def } from '@contember/schema-definition'
import { File } from './File'
import { Form } from './Form'
import { Image } from './Image'
import { ResponseAnswer } from './Response'

export const ContentBlockType = def.createEnum(
	'shortAnswer', // question, image, textAnswer, required
	'paragraph', // question, image, textAnswer, required
	'multipeChoice', // question, image, options, required
	'checkBoxes', // question, image, options, required
	'dropDown', // question, image, options, required
	'fileUpload', // question, image, file, required
	'date', // question, image, date, required
	'dateTime', // question, image, dateTime, required
)

export class FormInput {
	order = def.intColumn().notNull()
	type = def.enumColumn(ContentBlockType).notNull()
	form = def.manyHasOne(Form, 'inputs').notNull().cascadeOnDelete()

	question = def.stringColumn()
	placeholder = def.stringColumn()
	options = def.oneHasMany(FormOption, 'formInput').orderBy('order')
	file = def.oneHasOne(File).setNullOnDelete()
	date = def.dateColumn()
	dateTime = def.dateTimeColumn()
	required = def.boolColumn().notNull().default(false)
}

export class FormOption {
	order = def.intColumn().notNull()
	value = def.stringColumn().notNull()
	formInput = def.manyHasOne(FormInput, 'options').notNull().cascadeOnDelete()
}
