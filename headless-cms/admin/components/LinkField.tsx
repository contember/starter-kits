import { Block, Component, DiscriminatedBlocks, HasOne, SelectField, TextField } from "@contember/admin"

export interface LinkFieldProps {
	field: string
	label?: string
}

export const LinkField = Component<LinkFieldProps>(
	({ field, label }) => {
		return <HasOne field={field}>
			<DiscriminatedBlocks label={label ?? 'Link'} field="type">
				<Block discriminateBy="article" label="Articles">
					<SelectField label={undefined} options="Article.title" field="article" />
				</Block>
				<Block discriminateBy="page" label="Pages">
					<SelectField label={undefined} options="Page.title" field="page" />
				</Block>
				<Block discriminateBy="url" label="External link">
					<TextField label="Url" field="url" />
				</Block>
			</DiscriminatedBlocks>
		</HasOne>
	},
	'LinkField',
)
