import * as React from 'react'
import { Block, BlockRepeater, Box, Component, HasOne, ImageFileRepeater, ImageUploadField, Repeater, RichTextField, TextField } from '@contember/admin'
import { Button } from './Button'
import { ContentField } from './ContentField'
import { IconContactSection } from './icons/IconContactSection'
import { IconContentSection } from './icons/IconContentSection'
import { IconCTASection } from './icons/IconCTASection'
import { IconFeaturesSection } from './icons/IconFeaturesSection'
import { IconHeroSection } from './icons/IconHeroSection'
import { IconLogosSection } from './icons/IconLogosSection'
import { IconTestimonialSection } from './icons/IconTestimonialSection'
import { ImageField } from './ImageField'
import { LabelWithIcon } from './LabelWithIcon'
import locale from '../locales'

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
				label={<LabelWithIcon icon={<IconHeroSection />} label={locale['Hero section']} />}
			>
				<TextField field="primaryText" label={locale['Headline']} />
				<ContentField />
				<Repeater
					field="buttons"
					label={locale['Buttons']}
					sortableBy="order"
					initialEntityCount={0}
					addButtonText="Add button"
				>
					<Button field="button" />
				</Repeater>
				<ImageUploadField
					label={locale['Image']}
					urlField="image.url"
					widthField="image.width"
					heightField="image.height"
				>
					<TextField field="image.alt" label={locale['Alternative text']} />
				</ImageUploadField>
			</Block>

			<Block
				discriminateBy="logosSection"
				label={<LabelWithIcon icon={<IconLogosSection />} label={locale['Logos section']} />}
			>
				<ContentField />
				<ImageFileRepeater
					field="images"
					label={locale['Logos']}
					sortableBy="order"
					urlField="image.url"
					widthField="image.width"
					heightField="image.height"
					description="You can upload any number of logos."
				>
					<TextField field="image.alt" label={locale['Alternative text']} />
				</ImageFileRepeater>
			</Block>

			<Block
				discriminateBy="contentSection"
				label={<LabelWithIcon icon={<IconContentSection />} label={locale['Content section']} />}
			>
				<ContentField size="large" />
			</Block>

			<Block
				discriminateBy="featureSection"
				label={<LabelWithIcon icon={<IconFeaturesSection />} label={locale['Features section']} />}
			>
				<TextField field="primaryText" label={locale['Headline']} />
				<TextField field="secondaryText" label={locale['Subtitle']} />
				<ContentField />
				<Repeater field="featureList" label={locale['Features']} sortableBy="order" addButtonText="Add feature">
					<ImageField field="icon" label={locale['Icon']} />
					<TextField field="primaryText" label={locale['Headline']} />
					<ContentField />
				</Repeater>
			</Block>

			<Block
				discriminateBy="ctaSection"
				label={<LabelWithIcon icon={<IconCTASection />} label={locale['CTA section']} />}
			>
				<TextField field="primaryText" label={locale['Headline']} />
				<TextField field="secondaryText" label={locale['Subtitle']} />
				<ContentField />
				<Repeater
					field="buttons"
					label={locale['Buttons']}
					sortableBy="order"
					initialEntityCount={0}
					addButtonText="Add button"
				>
					<Button field="button" />
				</Repeater>
			</Block>

			<Block
				discriminateBy="testimonialSection"
				label={<LabelWithIcon icon={<IconTestimonialSection />} label={locale['Testimonial section']} />}
			>
				<TextField field="primaryText" label={locale['Headline']} />
				<ContentField />
				<Repeater
					field="testimonials"
					label={locale['Testimonials']}
					sortableBy="order"
					addButtonText="Add testimonial"
				>
					<ContentField />
					<Box heading="Author">
						<HasOne field="author">
							<ImageField field="image" label={locale['Image']} />
							<TextField field="name" label={locale['Name']} />
							<RichTextField field="title" label={locale['Title']} />
						</HasOne>
					</Box>
				</Repeater>
			</Block>

			<Block
				discriminateBy="contactSection"
				label={<LabelWithIcon icon={<IconContactSection />} label={locale['Contact section']} />}
			>
				<TextField field="primaryText" label={locale['Headline']} />
				<ContentField />
			</Block>
		</BlockRepeater>
	),
	'ContentBlocks',
)
