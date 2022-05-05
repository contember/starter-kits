import Head from 'next/head'

import { serverSideFetch } from '../lib/graphql/gqlfetch'
import getHomePage from '../lib/graphql/queries/getHomePage'

import Seo from '../components/seo'

export default function Home(props: any) {
	const forms = props.data?.listForm

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
			<Seo seo={{ title: 'Forms' }} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<article>
					<ul>
						{forms?.map((form: any) => (
							<li key={form.id}>
								<a href={`/form/${form.slug}`}>{form.slug}</a>
							</li>
						))}
					</ul>
				</article>
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
