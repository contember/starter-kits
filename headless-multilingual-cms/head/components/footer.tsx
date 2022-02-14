import { RichTextRenderer } from "@contember/react-client"
import Link from "./link"

export default function Footer(props: any) {
	const { menu, content } = props
	return (
		<footer>
			{content &&
				<RichTextRenderer blocks={content.parts} sourceField="json" />
			}
			{menu?.localesByLocale?.items.map((item: any) => (
					<li key={item.id}>
						<Link {...item} />
					</li>
				))
			}
		</footer>
	)
}
