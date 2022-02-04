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
	const articles = props.data?.listArticle
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Seo seo={blogPage?.seo} />
			<Head>
				<title>{blogPage?.seo?.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header menu={headerMenu} logo={setting?.logo} locale={props.locale} />
			<main>
				<ul>
					{articles?.map((article) => (
						<li key={article.id}>
							<Link href={`/blog/${article.slug}`}>
								<a>
									{article?.coverPhoto &&
										<img
											src={article.coverPhoto.url}
											width={article.coverPhoto.width}
											height={article.coverPhoto.height}
											alt={article.coverPhoto.alt}
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

			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</div>
	)
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { data, errors } = await serverSideFetch(getBlogPage, { locale: { code: context.locale } })

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null,
			locales: context.locales
		},
	}
}
