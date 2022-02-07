import * as React from 'react'
import type { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { RichTextRenderer } from '@contember/react-client'

import Errors from '../../components/errors'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Seo from '../../components/seo'

import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import getArticleBySlug from '../../lib/graphql/queries/getArticleBySlug'
import listArticleSlug from '../../lib/graphql/queries/listArticleSlug'

export default function Article(props: any) {
	const articleData = props.data?.getArticle
	const articleLocalizedData = articleData?.localesByLocale
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Seo
				seo={articleLocalizedData.seo}
			/>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header
				menu={headerMenu}
				logo={setting?.logo}
				locale={props.locale}
				localeSwitcherOptions={{ locales: articleData?.locales, prefix: '/blog' }}
			/>

			<main>
				<h1>
					{articleLocalizedData.headline}
				</h1>
				{articleData.coverPhoto &&
					<img src={articleData.coverPhoto.url} width={articleData.coverPhoto.width} height={articleData.coverPhoto.height} alt={articleData.coverPhoto.alt} />
				}
				<p>{articleLocalizedData.perex}</p>
				{articleLocalizedData.content &&
					<RichTextRenderer blocks={articleLocalizedData.content.parts} sourceField="json" />
				}
			</main>

			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</div>
	)
}

export async function getStaticProps({ locales, locale, params }: GetStaticPropsContext) {
	const { data, errors } = await serverSideFetch(getArticleBySlug, { slug: params?.slug, localeUnique: { code: locale } })

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null,
			locales,
		},
	}
}

export async function getStaticPaths() {
	const { data } = await serverSideFetch(listArticleSlug)

	const articles = data.listArticle
	const paths = articles?.map((article: any) => {
		const loacles = article.locales.map((locale: any) => (
			{ params: { slug: locale.slug ?? '' }, locale: locale.locale.code }
		))
		return loacles
	}).flat()

	return { paths, fallback: false }
}
