import { PermissionsBuilder } from '@contember/schema-definition'
import { Acl, Model } from '@contember/schema'

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
	},
})

export default aclFactory
