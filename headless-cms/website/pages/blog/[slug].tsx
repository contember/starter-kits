import * as React from 'react'
import Errors from '../../components/errors'
import getArticleBySlug from '../../lib/graphql/queries/getArticleBySlug'
import Head from 'next/head'
import listArticle from '../../lib/graphql/queries/listArticle'
import Seo from '../../components/seo'
import { RichTextRenderer } from '@contember/react-client'
import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function (props: any) {
	const articleData = props.data?.getArticle
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<>
			<Seo seo={articleData?.seo} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header menu={headerMenu} logo={setting?.logo} />

			<main>
				<h1>
					{articleData.headline}
				</h1>
				{articleData.coverPhoto &&
					<img src={articleData.coverPhoto.url} width={articleData.coverPhoto.width} height={articleData.coverPhoto.height} alt={articleData.coverPhoto.alt} />
				}
				<p>{articleData.lead}</p>
				{articleData.content &&
					<RichTextRenderer blocks={articleData.content.parts} sourceField="json" />
				}
			</main>

			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</>
	)
}

export async function getStaticProps({ params }: any) {
	const { data, errors } = await serverSideFetch(getArticleBySlug, { slug: params.slug })

	if (!data?.getArticle) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	const { data } = await serverSideFetch(listArticle)
	
	const articles = data?.listArticle ?? []
	const paths = articles.map((article: any) => (
		{ params: { slug: article.slug ?? '' } }
	))

	return { paths, fallback: 'blocking' }
}
