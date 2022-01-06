import { Component, Field, useEnvironment, useField } from '@contember/admin'

type PreviewButtonProps = {
	slugField: string,
	prefix?: string,
	path?: string
}

export const PreviewLink = Component<PreviewButtonProps>(
	({ slugField, path, prefix }) => {
		const webUrl = useEnvironment().getValue('WEB_URL')
		const { value: slug } = useField<string>(slugField)

		if (!path) {
			path = prefix ? `${prefix}${slug}` : `/${slug}`
		}

		return (
			<a href={`${webUrl}${path}`} target="_blank">
				Preview
			</a>
		)


	},
	({ slugField }) => (
		<Field field={slugField} />
	),
	'PreviewButton'
)
