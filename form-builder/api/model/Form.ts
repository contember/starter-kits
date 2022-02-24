import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { FormInput } from './FormInput'
import { Response } from './Response'

export class Form {
	publishAt = def.dateTimeColumn().default('now')
	title = def.stringColumn().notNull()
	slug = def.stringColumn().unique().notNull()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	inputs = def.oneHasMany(FormInput, 'form').orderBy('order')
	responses = def.oneHasMany(Response, 'form')
	details = def.oneHasOneInverse(FormDetails, 'form').notNull()
}

@def.View(`
	SELECT
		gen_random_uuid() AS id,
		form.id AS form_id,
		(SELECT COUNT(*) FROM response WHERE response.form_id = form.id) AS responses_count 
	FROM form
`)
export class FormDetails {
	form = def.oneHasOne(Form, 'details').notNull()
	responsesCount = def.intColumn().notNull()
}
