import Link from "./link"

export default function Header(props: any) {
	const { menu } = props
	return (
		<header>
			{menu.items.map((item: any) => (
				<li key={item.id}>
					<Link {...item} />
				</li>
			))}
		</header>
	)
}
