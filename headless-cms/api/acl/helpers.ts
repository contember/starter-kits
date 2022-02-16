import { Acl, Model } from '@contember/schema'

const fieldNames = (model: Model.Schema, entity: string): string[] => {
	return Object.keys(model.entities[entity].fields)
}

const someFields = (predicate: Acl.Predicate, fields: string[]): Acl.FieldPermissions => {
	return Object.fromEntries(fields.map(field => [field, predicate]))
}

export const allField = (model: Model.Schema, entity: string, predicate: Acl.Predicate): Acl.FieldPermissions => {
	return someFields(predicate, fieldNames(model, entity))
}

export const readOnly = (model: Model.Schema, entity: string, predicate: Acl.Predicate): Acl.EntityOperations => {
	return {
		read: allField(model, entity, predicate),
	}
}
