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
	// 'linearScale', // question, image, required
	'date', // question, image, date, required
	'dateTime', // question, image, dateTime, required
)

export class FormBlock {
	order = def.intColumn().notNull()
	type = def.enumColumn(ContentBlockType).notNull()
	form = def.manyHasOne(Form, 'blocks').notNull().cascadeOnDelete()
	responses = def.manyHasOne(ResponseAnswer, 'formQuestions')

	question = def.stringColumn()
	image = def.manyHasOne(Image)
	options = def.oneHasMany(FormOption, 'formBlock').orderBy('order')
	file = def.oneHasOne(File).setNullOnDelete()
	date = def.dateColumn()
	dateTime = def.dateTimeColumn()
	required = def.boolColumn()
}

export class FormOption {
	order = def.intColumn().notNull()
	textAnswer = def.stringColumn().notNull()
	selected = def.boolColumn().notNull()

	formBlock = def.manyHasOne(FormBlock, 'options').notNull().cascadeOnDelete()
}
