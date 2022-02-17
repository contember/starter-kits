import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { FormInput } from './FormInput'
import { Response } from './Response'

export class Form {
	publishAt = def.dateTimeColumn().default('now')
	slug = def.stringColumn().unique().notNull()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	inputs = def.oneHasMany(FormInput, 'form').orderBy('order')
	responses = def.oneHasMany(Response, 'form')
}
