import type { NextPage } from 'next'
import Head from 'next/head'

import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'

import Seo from '../components/seo'
import Blocks from '../components/blocks'
import Header from '../components/header'


const Home: NextPage = (props: any) => {
  const homePageData = props.data?.getPage
  const headerMenu = props.data?.getHeaderMenu
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
        seo={homePageData.seo}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header menu={headerMenu} logo={setting.logo} />

      <main>
        <Blocks blocks={homePageData.blocks} />
      </main>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const { data, errors } = await serverSideFetch(getHomePage)

  return {
    props: {
      data: data ?? null,
      errors: errors ?? null
    },
  }
}
