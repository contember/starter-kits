import * as React from 'react'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'

import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import getPageBySlug from '../../lib/graphql/queries/getPageBySlug'
import listPage from '../../lib/graphql/queries/listPage'

import Blocks from '../../components/blocks'
import Errors from '../../components/errors'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Seo from '../../components/seo'

export default function Page(props: any) {
	const pageData = props.data?.getPage
	const pageLocalizedData = pageData.localesByLocale
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Seo seo={pageLocalizedData?.seo} locales={pageData.locales} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header menu={headerMenu} logo={setting?.logo} locale={props.locale} localeSwitcherOptions={{ locales: pageData.locales }} />
			<main>
				<Blocks blocks={pageLocalizedData?.blocks} />
			</main>
			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</div>
	)
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { data, errors } = await serverSideFetch(getPageBySlug, { slug: context.params?.slug, locale: { code: context.locale } })

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null,
			locale: context.locale,
			locales: context.locales
		},
	}
}

export async function getStaticPaths() {
	const { data, errors } = await serverSideFetch(listPage)
	console.log('errors', errors)

	const pages = data?.listPage
	const paths = pages?.map((page: any) => {
		const loacles = page.locales.map((locale: any) => (
			{ params: { slug: locale.slug ?? '' }, locale: locale.locale.code }
		))
		return loacles
	}).flat()

	return { paths: paths, fallback: true }
}
