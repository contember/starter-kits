import type { NextPage } from 'next'
import Head from 'next/head'

import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'

import Seo from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'


export default function Home(props: any) {
	const forms = props.data?.listForm
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
		<>
			<Seo
				seo={{ title: 'Forms' }}
			/>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header logo={setting?.logo} />

			<main className="container">
				<ul>
					{forms?.map((form: any) => (
						<li key={form.id}>
							<a href={`/form/${form.slug}`}>{form.slug}</a>
						</li>
					))}
				</ul>
			</main>
		</>
	)
}

export async function getStaticProps() {
	const { data, errors } = await serverSideFetch(getHomePage)

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}
