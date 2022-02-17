import * as React from 'react'
import Errors from '../../components/errors'
import Head from 'next/head'
import { RichTextRenderer } from '@contember/react-client'
import { clientSideFetch, serverSideFetch } from '../../lib/graphql/gqlfetch'

import listForms from '../../lib/graphql/queries/listForms'
import getFormBySlug from '../../lib/graphql/queries/getFormBySlug'
import Inputs from '../../components/inputs'
import createResponse from '../../lib/graphql/mutations/createResponse'

export default function Form(props: any) {
	const form = props.data?.getForm

	if (props.errors) {
		return <Errors errors={props.errors} />
	}

	const [submitState, setSubmitState] = React.useState<any>(null)

	const onSubmit = React.useCallback(async (event) => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const values = Array.from(formData)
		const data = {
			form: {
				connect: { id: form.id }
			},
			answers: values.filter(([id, value]) => value).map(([id, value]) => {
				return {
					create: {
						value,
						formQuestion: {
							connect: { id }
						},
					},
				}
			})
		}

		const { errors, data: submitData } = await clientSideFetch(createResponse, { data })
		setSubmitState(errors)

		if (errors) {
			setSubmitState(errors)
		} else if (!submitData?.createResponse?.validation?.valid) {
			setSubmitState(submitData?.createResponse?.validation?.errors)
		} else {
			setSubmitState([{ message: 'Message sent.' }])
		}
	}, [])

	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{form.content &&
					<RichTextRenderer blocks={form.content.parts} sourceField="json" />
				}
				{submitState &&
					submitState.map((status, index) => <div key={index}>{status.message.text ? status.message.text : status.message}</div>)
				}
				<form onSubmit={onSubmit}>
					<Inputs inputs={form.inputs} />
					<button type="submit">Submit</button>
				</form>
			</main>
		</div>
	)
}

export async function getStaticProps({ params }: any) {
	const { data, errors } = await serverSideFetch(getFormBySlug, { slug: params.slug })

	return {
		props: {
			data: data ?? null,
			errors: errors ?? null
		},
		revalidate: 10,
	}
}

export async function getStaticPaths() {
	const { data } = await serverSideFetch(listForms)
	const forms = data.listForm
	const paths = forms.map((form: any) => (
		{ params: { slug: form.slug ?? '' } }
	))

	return { paths, fallback: 'blocking' }
}
