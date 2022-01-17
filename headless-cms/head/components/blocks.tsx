import { RichTextRenderer } from "@contember/react-client"
import Button from "./button"

function HeroSection({ primaryText, content, images, buttons }: any) {
	return (
		<section className="hero is-primary is-bold">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">
						{primaryText}
					</h1>
					<RichTextRenderer blocks={content.parts} sourceField="json" />
					<div>
						{buttons.map((button: any) => (
							<Button {...button.button} key={button.id} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default function Blocks({ blocks }: any) {
	return blocks.map((block: any) => {
		const blocksElements: any = {
			heroSection: <HeroSection {...block} key={block.id} />
		}

		return blocksElements[block.type]
	})
}
