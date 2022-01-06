import {
	BlockEditor,
	Component,
	DateTimeField,
	Section,
	SlugField,
	TextAreaField,
	TextField,
} from '@contember/admin'
import { PreviewLink, Seo } from '../components'

type ArticleSideFormProps = {
	isEditPage?: boolean
}

export const ArticleSideForm = Component<ArticleSideFormProps>(
	({ isEditPage }) => (
		<>
			{isEditPage && <PreviewLink slugField="slug" prefix="/blog/" />}
			<DateTimeField
				field="publishAt"
				label="Publish date"
				defaultValue={new Date().toISOString()}
			/>
		</>
	),
	'ArticleSideForm'
)

export const ArticleForm = Component(
	() => (
		<>
			<TextField field="title" label="Title" />
			<SlugField field="slug" label="Slug" derivedFrom="title" unpersistedHardPrefix="/blog/" />
			<Section heading="Content">
				<TextAreaField field="perex" label="Perex" />
				<BlockEditor
					contentField="json"
					field="content.parts"
					label="Text"
					sortableBy="order"
				/>
			</Section>
			<Seo titleDerivedFrom="title" descriptionDerivedFrom="perex" />
		</>
	),
	'ArticleForm'
)
