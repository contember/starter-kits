import { ContentBlock, Link, Seo } from '.'
import { InputValidation as validation, SchemaDefinition as def } from '@contember/schema-definition'

export const PageTypeEnum = def.createEnum('homePage', 'error404Page')

export class Page {
	publishAt = def.dateTimeColumn().default('now')
	@validation.when(validation.rules.on('role', validation.rules.notEmpty())).assert(validation.rules.empty(), "Slug must be empty.")
	// @validation.when(validation.rules.on('role', validation.rules.null())).assertNotEmpty('Slug must not be empty.')
	slug = def.stringColumn().unique()
	role = def.enumColumn(PageTypeEnum).unique().nullable()
	linkedFrom = def.oneHasMany(Link, 'page')
	blocks = def.oneHasMany(ContentBlock, 'page')
	seo = def.oneHasOne(Seo, 'page').cascadeOnDelete()
}
