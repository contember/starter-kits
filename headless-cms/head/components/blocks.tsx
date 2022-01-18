import { RichTextRenderer } from "@contember/react-client"
import { useCallback, useState } from "react"
import { clientSideFetch } from "../lib/graphql/gqlfetch"
import createMessage from "../lib/graphql/mutations/createMessage"
import Link from "./link"

function HeroSection({ primaryText, content, image, buttons }: any) {
	return (
		<section className="section-hero">
			<div>
				<h1>
					{primaryText}
				</h1>
				{content &&
					<RichTextRenderer blocks={content.parts} sourceField="json" />
				}
				<div>
					{buttons.map((button: any) => (
						<Link {...button.button} key={button.id} />
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

function LogoSection({ content, images }: any) {
	return (
		<section>
			{content &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{images.map(({ image }: any) => (
					<img src={image.url} alt={image.alt} width={image.width} height={image.height} />
				))}
			</div>
		</section>
	)
}

function ContentSection({ content }: any) {
	return (
		<section>
			{content &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
		</section>
	)
}

function FeatureSection({ primaryText, secondaryText, featureList }: any) {
	return (
		<section>
			<h2>{primaryText}</h2>
			<h3>{secondaryText}</h3>
			<ul>
				{featureList.map((feature: any) => (
					<li key={feature.id}>
						<img src={feature.icon.url} width={feature.icon.width} height={feature.icon.height} alt={feature.icon.alt} />
						<h3>{feature.primaryText}</h3>
						{feature.content &&
							<RichTextRenderer blocks={feature.content.parts} sourceField="json" />
						}
					</li>
				))}
			</ul>
		</section>
	)
}

function CtaSection({ primaryText, secondaryText, buttons }: any) {
	return (
		<section>
			<h2>{primaryText}</h2>
			<h3>{secondaryText}</h3>
			{buttons.map((button: any) => (
				<Link {...button.button} key={button.key} />
			))}
		</section>
	)
}

function TestimonialSection({ primaryText, content, testimonials }: any) {
	return (
		<section>
			<h2>{primaryText}</h2>
			{content &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{testimonials.map((testimonial: any) => (
					<div key={testimonial.key}>
						{testimonial.content &&
							<div>
								<RichTextRenderer blocks={testimonial.content.parts} sourceField="json" />
							</div>
						}
						<p>{testimonial.author.name}</p>
						<p>
							<RichTextRenderer source={testimonial.author.title} />
						</p>
						<img src={testimonial.author.image.url} width={testimonial.author.image.width} height={testimonial.author.image.height} alt={testimonial.author.image.alt} />
					</div>
				))}
			</div>
		</section>
	)
}

function ContactSection({ primaryText, content }: any) {
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
			{content &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			<div>
				{submitState &&
					submitState.map((status: any) => status.message.text ? status.message.text : status.message)
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

export default function Blocks({ blocks }: any) {
	return blocks.map((block: any) => {
		const blocksElements: any = {
			heroSection: <HeroSection {...block} key={block.id} />,
			logosSection: <LogoSection {...block} key={block.id} />,
			contentSection: <ContentSection {...block} key={block.id} />,
			featureSection: <FeatureSection {...block} key={block.id} />,
			ctaSection: <CtaSection {...block} key={block.id} />,
			testimonialSection: <TestimonialSection {...block} key={block.id} />,
			contactSection: <ContactSection {...block} key={block.id} />,
		}

		return blocksElements[block.type]
	})
}
