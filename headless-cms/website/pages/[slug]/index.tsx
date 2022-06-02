import * as React from 'react'
import Blocks from '../../components/blocks'
import Errors from '../../components/errors'
import getPageBySlug from '../../lib/graphql/queries/getPageBySlug'
import Head from 'next/head'
import listPage from '../../lib/graphql/queries/listPage'
import Seo from '../../components/seo'
import { serverSideFetch } from '../../lib/graphql/gqlfetch'
import Footer from '../../components/footer'
import Header from '../../components/header'

export default function (props: any) {
	const pageData = props.data?.getPage
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<>
			<Seo seo={pageData?.seo} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header menu={headerMenu} logo={setting?.logo} />

			<main>
				<Blocks blocks={pageData?.blocks} />
			</main>

			<Footer menu={footerMenu} content={setting?.footerCopyright} />
		</>
	)
}

export async function getStaticProps({ params }: any) {
	const { data, errors } = await serverSideFetch(getPageBySlug, { slug: params.slug })

	if (!data?.getPage) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data: data,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	const { data } = await serverSideFetch(listPage)

	const pages = data?.listPage ?? []
	const paths = pages?.map((page: any) => (
		{ params: { slug: page.slug ?? '' } }
	))

	return { paths, fallback: 'blocking' }
}
