import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Article } from './Article'
import { Page } from './Page'
import { publicRole } from './acl'
import { Button } from './Button'
import { ContentReference } from './Content'
import { MenuItem } from './Menu'

export const LinkEnum = def.createEnum('url', 'article', 'page')

@acl.allow(publicRole, {
	when: { 
		or: [
			{ button: acl.canRead('target') },
			{ contentReference: acl.canRead('target') },
			{ menuItem: acl.canRead('target') },
		]
	},
	read: true,
})
export class Link {
	type = def.enumColumn(LinkEnum).notNull()
	url = def.stringColumn()
	article = def.manyHasOne(Article, 'linkedFrom').setNullOnDelete()
	page = def.manyHasOne(Page, 'linkedFrom').setNullOnDelete()

	button = def.oneHasOneInverse(Button, 'target')
	contentReference = def.oneHasOneInverse(ContentReference, 'target')
	menuItem = def.oneHasOneInverse(MenuItem, 'target')
}
