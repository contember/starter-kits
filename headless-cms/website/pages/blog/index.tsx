import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import getBlogPage from '../../lib/graphql/queries/getBlogPage'
import Errors from '../../components/errors'
import Head from 'next/head'
import Seo from '../../components/seo'
import Header from '../../components/header'
import Link from 'next/link'
import Footer from '../../components/footer'

export default function (props: any) {
	const blogPage = props.data?.getPage
	const articles = props.data?.listArticle
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<>
			<Seo seo={blogPage?.seo} />
			<Head>
				<title>{blogPage?.seo?.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header menu={headerMenu} logo={setting?.logo} />

			<main>
				<ul>
					{articles.map((article) => (
						<li key={article.id}>
							<Link href={`/blog/${article.slug}`}>
								{article.coverPhoto &&
									<img src={article.coverPhoto.url} width={article.coverPhoto.width} height={article.coverPhoto.height} alt={article.coverPhoto.alt} />
								}
								<h3>{article.headline}</h3>
								<p>{article.lead}</p>
							</Link>
						</li>
					))}
				</ul>
			</main>

			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</>
	)
}

export async function getStaticProps() {
	const { data, errors } = await serverSideFetch(getBlogPage)

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}
