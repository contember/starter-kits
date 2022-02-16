import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { FormBlock } from './FormBlock'
import { Response } from './Response'

export class Form {
	publishAt = def.dateTimeColumn().default('now')
	slug = def.stringColumn().unique().notNull()
	content = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
	blocks = def.oneHasMany(FormBlock, 'form').orderBy('order')
	responses = def.oneHasMany(Response, 'form')

}
