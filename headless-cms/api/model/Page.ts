import { ContentBlock, Link, Seo } from '.'
import { InputValidation as validation, SchemaDefinition as def } from '@contember/schema-definition'

export const PageTypeEnum = def.createEnum('default', 'homePage', 'error404Page')

export class Page {
	title = def.stringColumn()
	publishAt = def.dateTimeColumn().default('now')
	slug = def.stringColumn().unique()
	@validation.when(validation.rules.on('slug', validation.rules.equals('default'))).assertNotEmpty("Type or Slug must not be empty.")
	@validation.when(validation.rules.on('slug', validation.rules.not(validation.rules.equals('default')))).assert(validation.rules.empty(), "Type or Slug must be empty.")
	type = def.enumColumn(PageTypeEnum).nullable()
	linkedFrom = def.oneHasMany(Link, 'page')
	blocks = def.oneHasMany(ContentBlock, 'page')
	seo = def.oneHasOne(Seo, 'page').cascadeOnDelete()
}
