import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import getBlogPage from '../../lib/graphql/queries/getBlogPage'
import Errors from '../../components/errors'
import Head from 'next/head'
import Seo from '../../components/seo'
import Header from '../../components/header'
import Link from 'next/link'

export default function Blog(props: any) {
	const blogPage = props.data?.getPage
	const articles = props.data?.listArticle
	const headerMenu = props.data?.getHeaderMenu

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Seo
				seo={blogPage.seo}
			/>
			<Head>
				<title>{blogPage.seo.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header menu={headerMenu} />

			<main>
				<ul>
					{articles.map((article: any) => (
						<Link href={`/blog/${article.slug}`}>
							<li key={article.id}>
								{article.coverPhoto &&
									<img src={article.coverPhoto.url} width={article.coverPhoto.width} height={article.coverPhoto.height} alt={article.coverPhoto.alt} />
								}
								<h3>{article.headline}</h3>
								<p>{article.perex}</p>
							</li>
						</Link>
					))}
				</ul>
			</main>

			<footer>

			</footer>
		</div>
	)
}

export async function getStaticProps() {
	const { data, errors } = await serverSideFetch(getBlogPage)

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
	}
}
