import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Link } from './Link'
import { ContentButton } from './ContentBlock'
import { publicRole } from './acl'

export const ButtonTypes = def.createEnum('primary', 'secondary')

@acl.allow(publicRole, {
	when: { contentButton: acl.canCreate('button') },
	read: true,
})
export class Button {
	label = def.stringColumn().notNull()
	target = def.oneHasOne(Link).setNullOnDelete()
	type = def.enumColumn(ButtonTypes).notNull().default('primary')

	contentButton = def.oneHasOneInverse(ContentButton, 'button')
}
