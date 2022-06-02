import { RichTextRenderer } from '@contember/react-client'

import Link from './link'

export type CustomRichTextRendererProps = {
	blocks?: any,
	source?: any,
	sourceField?: string,
	referenceDiscriminationField?: string
}

export type ReferenceProps = {
	id: string,
	type: string
	target: any
}

export default function ({ blocks, sourceField, source, referenceDiscriminationField }: CustomRichTextRendererProps) {
	const props: any = {
		referenceDiscriminationField,
		sourceField,
		...(blocks ? { blocks } : { source }),
	}

	return (
		<RichTextRenderer<any>
			{...props}
			renderElement={(props) => {
				if (props.element.type === 'link' && props.reference) {
					const reference = props.reference as ReferenceProps

					return (
						<Link
							label={props.element.children[0].text}
							url={reference.target}
						/>
					)
				}

				return props.fallback
			}}
		/>
	)
}
