import { useCallback, useState } from 'react'

import { clientSideFetch } from '../lib/graphql/gqlfetch'
import createMessage from '../lib/graphql/mutations/createMessage'

import RichTextRenderer from './richTextRenderer'
import Link from './link'

function HeroSection({ primaryText, content, image, buttons }) {
	return (
		<section className="section-hero">
			<div>
				<h1>
					{primaryText}
				</h1>
				{content?.parts &&
					<RichTextRenderer blocks={content.parts} sourceField="json" />
				}
				<div>
					{buttons?.map(({ id, button }) => (
						<Link key={id} url={button.target} {...button} />
					))}
				</div>
			</div>
			{image &&
				<div>
					<img src={image.url} width={image.width} height={image.height} alt={image.alt} />
				</div>
			}
		</section>
	)
}

function LogoSection({ content, images }) {
	return (
		<section>
			{content.parts &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{images &&
					images.map(({ image }) => (
						<img src={image.url} alt={image.alt} width={image.width} height={image.height} key={image.id} />
					))
				}
			</div>
		</section>
	)
}

function ContentSection({ content }) {
	return (
		<section>
			{content?.parts &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
		</section>
	)
}

function FeatureSection({ primaryText, secondaryText, featureList }) {
	return (
		<section>
			<h2>{primaryText}</h2>
			<h3>{secondaryText}</h3>
			<ul>
				{featureList &&
					featureList.map((feature) => (
						<li key={feature.id}>
							<img src={feature.icon.url} width={feature.icon.width} height={feature.icon.height} alt={feature.icon.alt} />
							<h3>{feature.primaryText}</h3>
							{feature.content &&
								<RichTextRenderer blocks={feature.content.parts} sourceField="json" />
							}
						</li>
					))
				}
			</ul>
		</section>
	)
}

function CtaSection({ primaryText, secondaryText, buttons }) {
	return (
		<section>
			<h2>{primaryText}</h2>
			<h3>{secondaryText}</h3>
			{buttons && buttons.map(({ id, button }) => (
				<Link key={id} url={button.target} {...button} />
			))}
		</section>
	)
}

function TestimonialSection({ primaryText, content, testimonials }) {
	return (
		<section>
			<h2>{primaryText}</h2>
			{content?.parts &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{testimonials &&
					testimonials.map((testimonial) => (
						<div key={testimonial.id}>
							{testimonial.content && testimonial.content.parts &&
								<div>
									<RichTextRenderer blocks={testimonial.content.parts} sourceField="json" />
								</div>
							}
							<p>{testimonial.author?.name}</p>
							{testimonial.author?.title &&
								<p>
									<RichTextRenderer source={testimonial.author.title} />
								</p>
							}
							<img
								src={testimonial.author?.image?.url}
								width={testimonial.author?.image?.width}
								height={testimonial.author?.image?.height}
								alt={testimonial.author?.image?.alt}
							/>
						</div>
					))
				}
			</div>
		</section>
	)
}

function ContactSection({ primaryText, content }) {
	const [submitState, setSubmitState] = useState<any>(null)

	const onSubmit = useCallback(async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const data = Object.fromEntries(formData)

		const { errors, data: submitData } = await clientSideFetch(createMessage, { data })
		setSubmitState(errors)

		if (errors) {
			setSubmitState(submitData)
		} else if (!submitData.createContactMessage.validation.valid) {
			setSubmitState(submitData.createContactMessage.validation.errors)
		} else {
			setSubmitState([{ message: 'Message sent.' }])
		}
	}, [])

	return (
		<section>
			<h2>{primaryText}</h2>
			{content?.parts &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{submitState &&
					submitState.map((status, index) => <div key={index}>{status.message.text ? status.message.text : status.message}</div>)
				}
				<form onSubmit={onSubmit}>
					<label htmlFor="fname">
						<span>Firt Name</span>
						<input type="text" name="firstName" id="fname" />
					</label>
					<label htmlFor="lname">
						<span>Last Name</span>
						<input type="text" name="lastName" id="lname" />
					</label>
					<label htmlFor="email">
						<span>E-mail</span>
						<input type="email" name="email" id="email" />
					</label>
					<label htmlFor="phone">
						<span>Phone</span>
						<input type="tel" name="phone" id="phone" />
					</label>
					<textarea name="message" />
					<label htmlFor="consent">
						<input type="checkbox" name="consent" id="consent" value="yes" required />
						<span>I consent to having this website store my submitted information so they can respond to my inquiry.</span>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	)
}

function ImageWithText({ content, image }) {
	return (
		<section>
			{content?.parts &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{image &&
					<div>
						<img src={image.url} width={image.width} height={image.height} alt={image.alt} />
					</div>
				}
			</div>
		</section>
	)
}

export default function ({ blocks }) {
	return blocks ? blocks.map((block) => {
		const blocksElements = {
			heroSection: <HeroSection {...block} key={block.id} />,
			logosSection: <LogoSection {...block} key={block.id} />,
			contentSection: <ContentSection {...block} key={block.id} />,
			featureSection: <FeatureSection {...block} key={block.id} />,
			ctaSection: <CtaSection {...block} key={block.id} />,
			testimonialSection: <TestimonialSection {...block} key={block.id} />,
			contactSection: <ContactSection {...block} key={block.id} />,
			imageWithText: <ImageWithText {...block} key={block.id} />,
		}

		return blocksElements[block.type]
	}) : null
}
