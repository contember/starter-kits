import { SchemaDefinition as def } from '@contember/schema-definition'
import { One, Content, Image } from '.'

export class Setting {
	unique = def.enumColumn(One).notNull().unique()
	logo = def.manyHasOne(Image)
	footerCopyright = def.oneHasOne(Content).cascadeOnDelete()
}
