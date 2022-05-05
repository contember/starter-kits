import type { GetStaticPropsContext } from 'next'
import Head from 'next/head'

import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'

import Blocks from '../components/blocks'
import Errors from '../components/errors'
import Footer from '../components/footer'
import Header from '../components/header'
import Seo from '../components/seo'

export default function Home(props: any) {
	const homePageData = props.data?.getPage
	const homePageLocalizedData = homePageData?.localesByLocale
	const headerMenu = props.data?.getHeaderMenu
	const footerMenu = props.data?.getFooterMenu
	const setting = props.data?.getSetting
	const settingLocalized = setting?.localesByLocale

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<div>
			<Seo seo={homePageLocalizedData?.seo} locales={homePageData?.locales} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header
				menu={headerMenu}
				logo={setting?.logo}
				locale={props.locale}
				localeSwitcherOptions={{ locales: homePageData?.locales }}
			/>
			<main>
				<Blocks blocks={homePageLocalizedData?.blocks} />
			</main>
			<Footer menu={footerMenu} content={settingLocalized?.footerCopyright} />
		</div>
	)
}

export async function getStaticProps({ locale, locales }: GetStaticPropsContext) {
	const { data, errors } = await serverSideFetch(getHomePage, { localeUnique: { code: locale } })
	return {
		props: {
			data: data ?? null,
			errors: errors ?? null,
			locale: locale,
			locales: locales
		},
		revalidate: 10,
	}
}
