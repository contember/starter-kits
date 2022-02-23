import { PermissionsBuilder } from '@contember/schema-definition'
import { Acl, Model } from '@contember/schema'

const fieldNames = (model: Model.Schema, entity: string): string[] => {
	return Object.keys(model.entities[entity].fields)
}

const someFields = (predicate: Acl.Predicate, fields: string[]): Acl.FieldPermissions => {
	return Object.fromEntries(fields.map(field => [field, predicate]))
}

const allField = (model: Model.Schema, entity: string, predicate: Acl.Predicate): Acl.FieldPermissions => {
	return someFields(predicate, fieldNames(model, entity))
}

const readOnly = (model: Model.Schema, entity: string, predicate: Acl.Predicate): Acl.EntityOperations => {
	return {
		read: allField(model, entity, predicate),
	}
}

const aclFactory = (model: Model.Schema): Acl.Schema => ({
	roles: {
		admin: {
			variables: {},
			stages: '*',
			entities: PermissionsBuilder.create(model).allowAll().allowCustomPrimary()
				.permissions,
			s3: {
				'**': {
					upload: true,
					read: true,
				},
			},
		},
		public: {
			variables: {},
			stages: '*',
			s3: {
				'**': {
					upload: true,
					read: true,
				},
			},
			entities: {
				Content: {
					predicates: {},
					operations: readOnly(model, 'Content', true),
				},
				ContentPart: {
					predicates: {},
					operations: readOnly(model, 'ContentPart', true),
				},
				ContentReference: {
					predicates: {},
					operations: readOnly(model, 'ContentReference', true),
				},
				File: {
					predicates: {},
					operations: readOnly(model, 'File', true),
				},
				Form: {
					predicates: {},
					operations: readOnly(model, 'Form', true),
				},
				FormOption: {
					predicates: {},
					operations: readOnly(model, 'FormOption', true),
				},
				FormInput: {
					predicates: {},
					operations: {
						read: allField(model, 'FormInput', true),
						create: allField(model, 'FormInput', false),
						update: allField(model, 'FormInput', true),
						delete: false,
					},
				},
				Image: {
					predicates: {},
					operations: readOnly(model, 'Image', true),
				},
				Response: {
					predicates: {},
					operations: {
						read: allField(model, 'Response', false),
						create: allField(model, 'Response', true),
						update: allField(model, 'Response', true),
						delete: false,
					},
				},
				ResponseAnswer: {
					predicates: {},
					operations: {
						read: allField(model, 'ResponseAnswer', false),
						create: allField(model, 'ResponseAnswer', true),
						update: allField(model, 'ResponseAnswer', true),
						delete: false,
					},
				},
			},
		},
	},
})

export default aclFactory
