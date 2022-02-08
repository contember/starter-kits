import type { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Errors from '../../components/errors'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Seo from '../../components/seo'

import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import getBlogPage from '../../lib/graphql/queries/getBlogPage'

export default function Blog(props: any) {
	const blogPage = props.data?.getPage
	const blogPageLocalized = blogPage?.localesByLocale
	const articles = props.data?.listArticle
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting
	const settingLocalized = setting?.localesByLocale

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Seo seo={blogPageLocalized?.seo} />
			<Head>
				<title>{blogPageLocalized?.seo?.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header
				menu={headerMenu}
				logo={setting?.logo}
				locale={props.locale}
				localeSwitcherOptions={{ locales: blogPage?.locales }}
			/>
			<main>
				<ul>
					{articles.length && articles?.map(({ id, localesByLocale: article, coverPhoto }) => (
						<li key={id}>
							<Link href={`/blog/${article.slug}`}>
								<a>
									{coverPhoto &&
										<img
											src={coverPhoto.url}
											width={coverPhoto.width}
											height={coverPhoto.height}
											alt={coverPhoto.alt}
										/>
									}
									<h3>{article.headline}</h3>
									<p>{article.perex}</p>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</main>

			<Footer menu={footerMenu} content={settingLocalized?.footerCopyright} />
		</div>
	)
}

export async function getStaticProps({ locales, locale }: GetStaticPropsContext) {
	const { data, errors } = await serverSideFetch(getBlogPage, { localeUnique: { code: locale }, locale: locale })

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null,
			locales: locales
		},
		revalidate: 10,
	}
}
