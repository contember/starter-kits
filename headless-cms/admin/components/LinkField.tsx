import * as React from 'react'
import { Block, Component, DiscriminatedBlocks, EntityAccessor, Field, HasOne, SelectField, TextField } from "@contember/admin"

export interface LinkFieldProps {
	field: string
	label?: string
}

function customRenderOptions(accessor: EntityAccessor) {
	const slug = accessor.getField("slug").value
	const role = accessor.getField("role").value

	return slug ?? role
}

export const LinkField = Component<LinkFieldProps>(
	({ field, label }) => {
		return (
			<HasOne field={field}>
				<DiscriminatedBlocks label={label ?? 'Link'} field="type" description="Select what you want to link.">
					<Block discriminateBy="article" label="Articles">
						<SelectField 
							label={undefined}
							options="Article.slug"
							field="article"
						/>
					</Block>
					<Block discriminateBy="page" label="Pages">
						<SelectField
							label={undefined}
							options="Page"
							field="page"
							renderOption={customRenderOptions}
							optionsStaticRender={
								<>
									<Field field="slug" />
									<Field field="role" />
								</>
							}
						/>
					</Block>
					<Block discriminateBy="url" label="External link">
						<TextField label="Url" field="url" />
					</Block>
				</DiscriminatedBlocks>
			</HasOne>
		)
	},
	'LinkField',
)
