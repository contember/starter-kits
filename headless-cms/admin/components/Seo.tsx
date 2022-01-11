import * as React from 'react'
import {
	Component,
	DerivedFieldLink,
	DerivedFieldLinkProps,
	HasOne,
	ImageUploadField,
	PageLinkButton,
	Section,
	TextAreaField,
	TextField,
} from '@contember/admin'

export type SeoFieldsProps = {
	advancedOptions?: boolean
}

export type SeoFormProps = {
	titleDerivedFrom?: DerivedFieldLinkProps['sourceField'],
	descriptionDerivedFrom?: DerivedFieldLinkProps['sourceField'],
	imageUrlDerivedFrom?: DerivedFieldLinkProps['sourceField']
	titleTransform?: DerivedFieldLinkProps['transform'],
	seoPage: string
}

export const SeoFields = Component<SeoFieldsProps>(
	({ advancedOptions }) => (
		<>
			<TextField field="title" label="Title" />
			<TextAreaField field="description" label="description" />
			{advancedOptions &&
				<>
					<TextField field="ogTitle" label="OG title" />
					<TextAreaField field="ogDescription" label="OG description" />
				</>
			}
			<ImageUploadField urlField="ogImage.url" label="OG image" description="Recommended aspect ratio 19:10 (e.g.: 2400×1260 px)." />
		</>
	),
	'SeoFields'
)


export const Seo = Component<SeoFormProps>(
	({ titleDerivedFrom, descriptionDerivedFrom, imageUrlDerivedFrom, titleTransform, seoPage }) => (
		<Section heading="SEO">
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
			<HasOne field="seo">
				<SeoFields />
			</HasOne>
			<PageLinkButton to={seoPage}>Advanced website SEO</PageLinkButton>
		</Section>
	),
	'Seo',
)
