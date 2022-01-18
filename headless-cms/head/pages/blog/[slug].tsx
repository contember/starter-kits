import * as React from 'react'
import Errors from '../../components/errors'
import getArticleBySlug from '../../lib/graphql/queries/getArticleBySlug'
import Head from 'next/head'
import listArticle from '../../lib/graphql/queries/listArticle'
import Seo from '../../components/seo'
import { RichTextRenderer } from '@contember/react-client'
import { serverSideFetch } from '../../lib/graphql/gqlfetch'

export default function Article(props: any) {
	const articleData = props.data?.getArticle

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Head>
				<Seo
					seo={articleData.seo}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>
					{articleData.headline}
				</h1>
				{articleData.content &&
					<RichTextRenderer blocks={articleData.content.parts} sourceField="json" />
				}
			</main>

			<footer>

			</footer>
		</div>
	)
}

export async function getStaticProps({ params }: any) {
	const { data, errors } = await serverSideFetch(getArticleBySlug, { slug: params.slug })

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
	}
}

export async function getStaticPaths() {
	const { data } = await serverSideFetch(listArticle)
	const articles = data.listArticle
	const paths = articles.map((article: any) => (
		{ params: { slug: article.slug ?? '' } }
	))

	return { paths, fallback: false }
}
