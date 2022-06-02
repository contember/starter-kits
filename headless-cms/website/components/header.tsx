import Link from "./link"

export default function (props: any) {
	const { menu, logo } = props
	return (
		<nav className="container-fluid">
			{logo &&
				<ul>
					<li>
						<img src={logo.url} width={logo.width} height={logo.height} alt={logo.alt} />
					</li>
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
