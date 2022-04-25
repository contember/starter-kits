import * as React from 'react'
import {
	Component,
	DerivedFieldLink,
	DerivedFieldLinkProps,
	Environment,
	Field,
	ImageUploadField,
	LinkButton,
	SlugField,
	TextareaField,
	TextField,
} from '@contember/admin'
import { Conditional } from './Conditional'
import locale from '../locales'
import { LocaleSideDimension } from './LocaleSideDimension'

export type SeoSlugFieldProps = {
	unpersistedHardPrefix?: string
	webUrl?: string
	referenceEntity?: string
	hasRoleField?: boolean
}

export type SeoFieldsProps = SeoSlugFieldProps & {
	field?: string
	advancedOptions?: boolean
}

export type SeoFormProps = {
	advancedOptions?: boolean
	hasRoleFiled?: boolean
	titleDerivedFrom?: DerivedFieldLinkProps['sourceField'],
	descriptionDerivedFrom?: DerivedFieldLinkProps['sourceField'],
	imageUrlDerivedFrom?: DerivedFieldLinkProps['sourceField']
	titleTransform?: DerivedFieldLinkProps['transform'],
	seoFieldsProps?: SeoFieldsProps
	seoPage?: string
}

function getSlugPrefix(environment: Environment, unpersistedHardPrefix?: string) {
	const webUrl = environment.getValue('WEB_URL')
	const currentLocaleCode = environment.getValue('currentLocaleCode')
	const prefix = unpersistedHardPrefix ? `/${currentLocaleCode}${unpersistedHardPrefix}` : `/${currentLocaleCode}/`

	return (webUrl ? webUrl + prefix : prefix)
}

const SeoSlugField = Component<SeoFieldsProps>(
	({ hasRoleField, referenceEntity, unpersistedHardPrefix }) => {
		const fieldRole = referenceEntity ? referenceEntity + '.base.role' : 'base.role'
		const fieldSlug = referenceEntity ? referenceEntity + '.slug' : 'slug'
		const fieldTitle = referenceEntity ? (!hasRoleField ? referenceEntity + '.headline' : referenceEntity + '.seo.title') : 'seo.title'

		if (hasRoleField) {
			return (
				<Conditional
					showIf={(accessor) => accessor.getField(fieldRole).value === null}
					additionalStaticChildren={<Field field={fieldRole} />}
				>
					<SlugField
						field={fieldSlug}
						derivedFrom={fieldTitle}
						label={locale['Url']}
						linkToExternalUrl
						unpersistedHardPrefix={(environment) => {
							return getSlugPrefix(environment, unpersistedHardPrefix)
						}}
					/>
				</Conditional>
			)
		} else {
			return (
				<SlugField
					field={fieldSlug}
					derivedFrom={fieldTitle}
					label={locale['Url']}
					linkToExternalUrl
					unpersistedHardPrefix={(environment) => {
						return getSlugPrefix(environment, unpersistedHardPrefix)
					}}
				/>
			)
		}

	},
	'SeoSlugField'
)

const SeoFields = Component<SeoFieldsProps>(
	(props) => {
		const { field, advancedOptions } = props
		const fieldTitle = field ? field + '.title' : 'title'
		const fieldDescription = field ? field + '.description' : 'description'
		const fieldOgTitle = field ? field + '.ogTitle' : 'ogTitle'
		const fieldOgDescription = field ? field + '.ogDescription' : 'ogDescription'
		const fieldOgImageUrl = field ? field + '.ogImage.url' : 'ogImage.url'

		return (
			<>
				<TextField field={fieldTitle} label={locale['Title']} required />
				<SeoSlugField {...props} />
				<TextareaField
					field={fieldDescription}
					label={locale['Description']}
					description={locale['Short summary of the page. Keep it between 120 and 158 characters.']}
				/>
				{advancedOptions &&
					<>
						<TextField field={fieldOgTitle} label={locale['OG title']} />
						<TextareaField field={fieldOgDescription} label={locale['OG description']} />
					</>
				}
				<ImageUploadField
					urlField={fieldOgImageUrl}
					label={locale['OG image']}
					description={locale['Recommended aspect ratio 19:10 (e.g.: 2400×1260 px).']}
				/>
			</>
		)

	},
	'SeoFields',
)


export const Seo = Component<SeoFormProps>(
	({ advancedOptions, titleDerivedFrom, descriptionDerivedFrom, imageUrlDerivedFrom, titleTransform, seoPage, seoFieldsProps }) => {
		return (
			<LocaleSideDimension>
				<>
					{titleDerivedFrom &&
						<>
							<DerivedFieldLink sourceField={titleDerivedFrom} derivedField="seo.title" transform={titleTransform} />
							<DerivedFieldLink sourceField={titleDerivedFrom} derivedField="seo.ogTitle" transform={titleTransform} />
						</>
					}
					{descriptionDerivedFrom &&
						<>
							<DerivedFieldLink sourceField={descriptionDerivedFrom} derivedField="seo.description" />
							<DerivedFieldLink sourceField={descriptionDerivedFrom} derivedField="seo.ogDescription" />
						</>
					}
					{imageUrlDerivedFrom &&
						<>
							<DerivedFieldLink sourceField={imageUrlDerivedFrom} derivedField="seo.ogImage.url" />
						</>
					}
					<SeoFields field="seo" {...seoFieldsProps} advancedOptions={advancedOptions} />
					{(seoPage && !advancedOptions) &&
						<LinkButton to={seoPage}>{locale['Advanced website SEO']}</LinkButton>
					}
				</>
			</LocaleSideDimension>
		)
	},
	'Seo',
)
