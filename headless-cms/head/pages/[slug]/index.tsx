import * as React from 'react'
import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const { slug } = router.query

  return (<p>Page: {slug} </p>)
}

export async function getStaticProps(context: any) {
  console.log('getStaticProps', context)

  return {
    props: {}, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'testdajwod' } },
    ],
    fallback: false,
  }
}
