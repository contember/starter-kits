import type { GetStaticPropsContext, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'

import Blocks from '../components/blocks'
import Footer from '../components/footer'
import Header from '../components/header'
import Seo from '../components/seo'


const Home: NextPage = (props: any) => {
  const homePageData = props.data?.getPage
  const homePageLocalizedData = homePageData?.localesByLocale
  const headerMenu = props.data?.getHeaderMenu
  const footerMenu = props.data?.getFooterMenu
  const setting = props.data?.getSetting

  if (props.errors) {
    return (
      <>
        {
          props.errors.map((error: { message: string, code: string }) => (
            <>
              <p>{error.message}</p>
              <p>{error.code}</p>
            </>
          ))
        }
      </>
    )
  }

  return (
    <div>
      <Seo
        seo={homePageLocalizedData?.seo}
        locales={homePageData.locales}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header menu={headerMenu} logo={setting?.logo} locale={props.locale} localeSwitcherOptions={{ locales: homePageData.locales }} />

      <main>
        <Blocks blocks={homePageLocalizedData?.blocks} />
      </main>

      <Footer menu={footerMenu} content={setting?.footerCopyright} />
    </div>
  )
}

export default Home


export async function getStaticProps(context: GetStaticPropsContext) {
  const { data, errors } = await serverSideFetch(getHomePage, { locale: { code: context.locale } })
  return {
    props: {
      data: data ?? null,
      errors: errors ?? null,
      locale: context.locale,
      locales: context.locales
    },
  }
}
