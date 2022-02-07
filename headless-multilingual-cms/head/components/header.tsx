import { GetStaticPropsContext } from "next"
import Link from "./link"
import LocaleSwitcher from "./localeSwitcher"

export type HeaderProps = {
	menu?: any
	logo?: any
	locale: GetStaticPropsContext["locale"]
	localeSwitcherOptions?: any
}

export default function Header(props: HeaderProps) {
	const { menu, logo, locale, localeSwitcherOptions } = props
	return (
		<header>
			{logo &&
				<img src={logo.url} width={logo.width} height={logo.height} alt={logo.alt} />
			}
			{menu &&
				<ul>
					{menu?.localesByLocale?.items.map((item: any) => (
						<li key={item.id}>
							<Link {...item} locale={locale} />
						</li>
					))}
				</ul>
			}
			<LocaleSwitcher options={localeSwitcherOptions} />
		</header>
	)
}
