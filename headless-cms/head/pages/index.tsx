import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import gqlfetch from '../lib/graphql/gqlfetch'
import { homePage } from '../lib/graphql/queries/homePage'

import Seo from '../components/seo'
import Blocks from '../components/blocks'


const Home: NextPage = (props: any) => {
  const homePageData = props.data.getPage

  return (
    <div className={styles.container}>
      <Head>
        <Seo
          seo={homePageData.seo}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Blocks blocks={homePageData.blocks} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const { data } = await gqlfetch(homePage)
  return {
    props: {
      data
    },
  }
}
