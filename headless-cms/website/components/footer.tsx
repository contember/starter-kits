import { RichTextRenderer } from "@contember/react-client"
import Link from "./link"

export default function (props: any) {
	const { menu, content } = props
	return (
		<nav className="container-fluid">
			{content &&
				<ul>
					<li><RichTextRenderer blocks={content.parts} sourceField="json" /></li>
				</ul>
			}
			{menu &&
				<ul>
					{menu.items.map((item: any) => (
						<li key={item.id}>
							<Link {...item} />
						</li>
					))}
				</ul>
			}
		</nav>
	)
}
