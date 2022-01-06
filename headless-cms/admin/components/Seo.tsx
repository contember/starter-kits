import {
	Component,
	DerivedFieldLink,
	DerivedFieldLinkProps,
	HasOne,
	ImageUploadField,
	Section,
	TextAreaField,
	TextField,
} from '@contember/admin'

export interface SeoFormProps {
	titleDerivedFrom: DerivedFieldLinkProps['sourceField'],
	descriptionDerivedFrom?: DerivedFieldLinkProps['sourceField'],
	imageUrlDerivedFrom?: DerivedFieldLinkProps['sourceField']
	titleTransform?: DerivedFieldLinkProps['transform']
}

export const Seo = Component<SeoFormProps>(
	props => (
		<Section heading="SEO">
			{props.titleDerivedFrom &&
				<>
					<DerivedFieldLink sourceField={props.titleDerivedFrom} derivedField="seo.title" transform={props.titleTransform} />
					<DerivedFieldLink sourceField={props.titleDerivedFrom} derivedField="seo.ogTitle" transform={props.titleTransform} />
				</>
			}
			{props.descriptionDerivedFrom &&
				<>
					<DerivedFieldLink sourceField={props.descriptionDerivedFrom} derivedField="seo.description" />
					<DerivedFieldLink sourceField={props.descriptionDerivedFrom} derivedField="seo.ogDescription" />
				</>
			}
			{props.imageUrlDerivedFrom &&
				<>
					<DerivedFieldLink sourceField={props.imageUrlDerivedFrom} derivedField="seo.ogImage.url" />
				</>
			}
			<HasOne field="seo">
				<TextField field="title" label="Title" />
				<TextAreaField field="description" label="description" />
				<TextField field="ogTitle" label="OG title" />
				<TextAreaField field="ogDescription" label="OG description" />
				<ImageUploadField urlField="ogImage.url" label="OG image" description="Recommended aspect ratio 19:10 (e.g.: 2400×1260 px)." />
			</HasOne>
		</Section>
	),
	'Seo',
)
