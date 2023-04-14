import { SchemaDefinition as def, AclDefinition as acl } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'
import { publicRole } from './acl'

@acl.allow(publicRole, {
	read: true
})
export class Setting {
	unique = def.enumColumn(def.createEnum('One')).notNull().unique()
	logo = def.manyHasOne(Image).setNullOnDelete()

	footerCopyright = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
}
