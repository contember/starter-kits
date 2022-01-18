import Link from "./link"

export default function Header(props: any) {
	const { menu, logo } = props
	return (
		<header>
			{logo &&
				<img src={logo.url} width={logo.width} height={logo.height} alt={logo.alt} />
			}
			{menu &&
				menu.items.map((item: any) => (
					<li key={item.id}>
						<Link {...item} />
					</li>
				))
			}
		</header>
	)
}
