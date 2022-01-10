import * as React from 'react'
import {
	Block,
	BlockRepeater,
	Box,
	Component,
	HasOne,
	ImageFileRepeater,
	Repeater,
	RichTextField,
	TextField
} from '@contember/admin'
import {
	Button,
	ContentField,
	ImageField,
	LabelWithIcon
} from '.'
import { IconContactSection, IconContentSection, IconCTASection, IconFeaturesSection, IconHeroSection, IconLogosSection } from './icons'
import { IconTestimonialSection } from './icons/IconTestimonialSection'

export const ContentBlocks = Component(
	() => (
		<BlockRepeater
			field="blocks"
			label={undefined}
			discriminationField="type"
			sortableBy="order"
			addButtonText="Add content block"
		>
			<Block
				discriminateBy="heroSection"
				label={
					<LabelWithIcon icon={<IconHeroSection />} label="Hero section" />
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
					sortableBy="order"
					urlField="image.url"
					widthField="image.width"
					heightField="image.height"
				>
					<TextField field="image.alt" label="Alternative text" />
				</ImageFileRepeater>
			</Block>

			<Block
				discriminateBy="logosSection"
				label={<LabelWithIcon icon={<IconLogosSection />} label="Logos section" />}
			>
				<RichTextField field="jsonContent" label="Content" />
				<ImageFileRepeater
					field="images"
					label="Logos"
					sortableBy="order"
					urlField="image.url"
					widthField="image.width"
					heightField="image.height"
				>
					<TextField field="image.alt" label="Alternative text" />
				</ImageFileRepeater>
			</Block>

			<Block
				discriminateBy="contentSection"
				label={<LabelWithIcon icon={<IconContentSection />} label="Content section" />}
			>
				<ContentField size="large" />
			</Block>

			<Block
				discriminateBy="FeaturesSection"
				label={<LabelWithIcon icon={<IconFeaturesSection />} label="Features section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<TextField field="secondaryText" label="Subtitle" />
				<ContentField />
				<Repeater field="featureList" label="Features" sortableBy="order" addButtonText="Add feature">
					<ImageField field="icon" label="Icon" />
					<TextField field="primaryText" label="Headline" />
					<ContentField />
				</Repeater>
			</Block>

			<Block
				discriminateBy="ctaSection"
				label={<LabelWithIcon icon={<IconCTASection />} label="CTA section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<TextField field="secondaryText" label="Subtitle" />
				<ContentField />
				<Repeater
					field="buttons"
					label="Buttons"
					sortableBy="order"
					initialEntityCount={0}
					addButtonText="Add button"
				>
					<Button field="button" />
				</Repeater>
			</Block>

			<Block
				discriminateBy="testimonialSection"
				label={<LabelWithIcon icon={<IconTestimonialSection />} label="Testimonial section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<ContentField />
				<Repeater
					field="testimonials"
					label="Testimonials"
					sortableBy="order"
					addButtonText="Add testimonial"
				>
					<ContentField />
					<Box heading="Author">
						<HasOne field="author">
							<ImageField field="image" label="Image" />
							<TextField field="name" label="Name" />
							<RichTextField field="title" label="Title" />
						</HasOne>
					</Box>
				</Repeater>
			</Block>

			<Block
				discriminateBy="contactSection"
				label={<LabelWithIcon icon={<IconContactSection />} label="Contact section" />}
			>
				<TextField field="primaryText" label="Headline" />
				<ContentField />
			</Block>
		</BlockRepeater>
	),
	'ContentBlocks'
)
