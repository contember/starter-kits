import * as React from 'react'
import Head from 'next/head'
import { RichTextRenderer } from '@contember/react-client'
import { answersParser } from '../../lib/utils/answersParser'

import Errors from '../../components/errors'
import Inputs from '../../components/inputs'
import Seo from '../../components/seo'

import { clientSideFetch, serverSideFetch } from '../../lib/graphql/gqlfetch'
import listForms from '../../lib/graphql/queries/listForms'
import getFormBySlug from '../../lib/graphql/queries/getFormBySlug'
import createResponse from '../../lib/graphql/mutations/createResponse'

export default function Form(props: any) {
	const form = props.data?.getForm
	const [submitState, setSubmitState] = React.useState<any[]>([])
	const [sendingState, setSendingState] = React.useState<boolean>(false)

	const onSubmit = React.useCallback(async (event) => {
		event.preventDefault()
		setSendingState(true)
		const formData = new FormData(event.target)
		const values = Array.from(formData)
		const data = {
			form: {
				connect: { id: form.id },
			},
			answers: await answersParser(values),
		}

		const { errors, data: submitData } = await clientSideFetch(createResponse, { data })

		if (errors) {
			setSubmitState(errors)
		} else if (submitData.createResponse.ok) {
			setSubmitState([{ ok: true }])
		} else {
			setSubmitState([{ message: { text: submitData.createResponse.errorMessage } }])
		}

		setSendingState(false)
	}, [form])

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	return (
		<>
			<Seo seo={{ title: form.title }} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container">
				<section>
					{form.content &&
						<article>
							<h1>{form.title}</h1>
							<RichTextRenderer blocks={form.content.parts} sourceField="json" />
						</article>
					}
					<article>
						{submitState[0]?.ok ?
							<p>Thank you for your submission.</p> :
							<form onSubmit={onSubmit}>
								<Inputs inputs={form.inputs} />
								{submitState &&
									submitState.map((status, index) => <p key={index}>{status.message.text ? status.message.text : status.message}</p>)
								}
								<button type="submit" aria-busy={sendingState} className={sendingState ? 'secondary' : ''}>Submit</button>
							</form>
						}
					</article>
				</section>
			</main>
		</>
	)
}

export async function getStaticProps({ params }: any) {
	const { data, errors } = await serverSideFetch(getFormBySlug, { slug: params.slug })

	if (!data?.getForm) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			data,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	const { data } = await serverSideFetch(listForms)
	const forms = data?.listForm ?? []
	const paths = forms.map((form: any) => (
		{ params: { slug: form.slug ?? '' } }
	))

	return { paths, fallback: 'blocking' }
}
