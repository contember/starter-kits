import { PermissionsBuilder } from '@contember/schema-definition'
import { Acl, Model } from '@contember/schema'
import { allField, readOnly } from './helpers'

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
					upload: false,
					read: true,
				},
			},
			entities: {
				Article: {
					predicates: {},
					operations: readOnly(model, 'Article', true),
				},
				Button: {
					predicates: {},
					operations: readOnly(model, 'Button', true),
				},
				ContactMessage: {
					predicates: {},
					operations: {
						read: allField(model, 'ContactMessage', true),
						create: allField(model, 'ContactMessage', true),
						update: allField(model, 'ContactMessage', false),
						delete: false,
					},
				},
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
				ContentBlock: {
					predicates: {},
					operations: readOnly(model, 'ContentBlock', true),
				},
				ContentImage: {
					predicates: {},
					operations: readOnly(model, 'ContentImage', true),
				},
				ContentButton: {
					predicates: {},
					operations: readOnly(model, 'ContentButton', true),
				},
				ContentFeatureItem: {
					predicates: {},
					operations: readOnly(model, 'ContentFeatureItem', true),
				},
				ContentTestimonial: {
					predicates: {},
					operations: readOnly(model, 'ContentTestimonial', true),
				},
				TestimonialAuthor: {
					predicates: {},
					operations: readOnly(model, 'TestimonialAuthor', true),
				},
				ContentBlogPost: {
					predicates: {},
					operations: readOnly(model, 'ContentBlogPost', true),
				},
				Image: {
					predicates: {},
					operations: readOnly(model, 'Image', true),
				},
				Link: {
					predicates: {},
					operations: readOnly(model, 'Link', true),
				},
				Menu: {
					predicates: {},
					operations: readOnly(model, 'Menu', true),
				},
				MenuItem: {
					predicates: {},
					operations: readOnly(model, 'MenuItem', true),
				},
				Page: {
					predicates: {},
					operations: readOnly(model, 'Page', true),
				},
				Seo: {
					predicates: {},
					operations: readOnly(model, 'Seo', true),
				},
				Setting: {
					predicates: {},
					operations: readOnly(model, 'Setting', true),
				}
			},
		},
	},
})

export default aclFactory
