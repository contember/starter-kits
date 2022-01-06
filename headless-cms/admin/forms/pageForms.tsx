import { IconLogos, IconText, IconTextWithImage } from '../components/icons'
import { Button, Conditional, LabelWithIcon, PreviewLink, Seo } from '../components'
import {
	Block,
	BlockEditor,
	BlockRepeater,
	Component,
	DateTimeField,
	ImageFileRepeater,
	Repeater,
	RichTextField,
	Section,
	SelectField,
	SlugField,
	TextField,
} from '@contember/admin'

type PageSideFormProps = {
	isEditPage?: boolean
}

export const PageSideForm = Component<PageSideFormProps>(
	({ isEditPage }) => (
		<>
			{isEditPage &&
				<>
					<Conditional showIf={(accessor) => accessor.getField('type').value === null}>
						<PreviewLink slugField="slug" />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('type').value === 'homePage'}>
						<PreviewLink slugField="slug" path={'/'} />
					</Conditional>
					<Conditional showIf={(accessor) => accessor.getField('type').value === 'error404Page'}>
						<PreviewLink slugField="slug" path={'/404'} />
					</Conditional>
				</>
			}
			<DateTimeField
				field="publishAt"
				label="Publish date"
				defaultValue={new Date().toISOString()}
			/>
			<SelectField
				field="type"
				label="Page type"
				allowNull
				options={[
					{ value: 'homePage', label: 'HomePage' },
					{ value: 'error404Page', label: "Error 404" }
				]}
			/>
		</>
	),
	'PageSideForm'
)

export const PageForm = Component(
	() => (
		<>
			<TextField field="title" label="Title" />
			<Conditional showIf={(accessor) => accessor.getField('type').value === null}>
				<SlugField field="slug" label="Slug" derivedFrom="title" unpersistedHardPrefix="/" />
			</Conditional>
			<Section heading="Content">
				<BlockRepeater
					field="blocks"
					label={undefined}
					discriminationField="type"
					sortableBy="order"
					addButtonText="Add content block"
				>
					<Block
						discriminateBy="textWithImage"
						label={
							<LabelWithIcon icon={<IconTextWithImage />} label="Text with image" />
						}
					>
						<TextField field="primaryText" label="Headline" />
						<RichTextField field="jsonContent" label="Content" />
						<Repeater
							field="buttons"
							label="Buttons"
							sortableBy="order"
							initialEntityCount={0}
							addButtonText="Add button"
						>
							<Button field="button" />
						</Repeater>
						<ImageFileRepeater
							field="images"
							label="Images"
							orderBy="order"
							urlField="image.url"
							widthField="image.width"
							heightField="image.height"
						>
							<TextField field="image.alt" label="Alternative text" />
						</ImageFileRepeater>
					</Block>

					<Block
						discriminateBy="logos"
						label={<LabelWithIcon icon={<IconLogos />} label="Logos" />}
					>
						<RichTextField field="jsonContent" label="Content" />
						<ImageFileRepeater
							field="images"
							label="Logos"
							orderBy="order"
							urlField="image.url"
							widthField="image.width"
							heightField="image.height"
							description="image.alt"
						>
							<TextField field="image.alt" label="Alternative text" />
						</ImageFileRepeater>
					</Block>

					<Block
						discriminateBy="text"
						label={<LabelWithIcon icon={<IconText />} label="Text" />}
					>
						<BlockEditor
							contentField="json"
							field="content.parts"
							label="Content"
							sortableBy="order"
						/>
					</Block>
				</BlockRepeater>
			</Section>
			<Seo titleDerivedFrom="title" />
		</>
	),
	'PageForm'
)
