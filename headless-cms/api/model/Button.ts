import { SchemaDefinition as def } from "@contember/schema-definition"
import { Link } from "."

export const ButtonTypes = def.createEnum("primary", "secondary")

export class Button {
	label = def.stringColumn()
	url = def.oneHasOne(Link)
	type = def.enumColumn(ButtonTypes).notNull().default('primary')
}
