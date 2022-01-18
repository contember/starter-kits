import type { NextPage } from 'next'
import Head from 'next/head'

import { serverSideFetch } from '../lib/graphql/gqlfetch'
import homePage from '../lib/graphql/queries/homePage'

import Seo from '../components/seo'
import Blocks from '../components/blocks'


const Home: NextPage = (props: any) => {
  const homePageData = props.data?.getPage

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
      <Head>
        <Seo
          seo={homePageData.seo}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Blocks blocks={homePageData.blocks} />
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const { data, errors } = await serverSideFetch(homePage)

  return {
    props: {
      data: data ?? null,
      errors: errors ?? null
    },
  }
}
