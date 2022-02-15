import { SchemaDefinition as def } from '@contember/schema-definition'
import { Content } from './Content'
import { Image } from './Image'

export class Setting {
	unique = def.enumColumn(def.createEnum('One')).notNull().unique()
	logo = def.manyHasOne(Image).setNullOnDelete()

	footerCopyright = def.oneHasOne(Content).removeOrphan().setNullOnDelete()
}
