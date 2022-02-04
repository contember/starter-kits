import * as React from 'react'
import { Block, Component, DiscriminatedBlocks, EntityAccessor, Field, HasOne, SelectField, TextField } from "@contember/admin"
import locale from '../locales'

export interface LinkFieldProps {
	field: string
	label?: string
}

function customRenderOptions(accessor: EntityAccessor) {
	const slug = accessor.getField('slug').value
	const role = accessor.getField('root.role').value

	return slug ?? role
}

export const LinkField = Component<LinkFieldProps>(
	({ field, label }) => {
		return (
			<HasOne field={field}>
				<DiscriminatedBlocks label={label ?? 'Link'} field="type" description={locale["Select what you want to link."]}>
					<Block discriminateBy="article" label={locale["Articles"]}>
						<SelectField
							label={undefined}
							options="ArticleLocale[locale.code=$currentLocaleCode].slug"
							field="article"
						/>
					</Block>
					<Block discriminateBy="page" label={locale["Pages"]}>
						<SelectField
							label={undefined}
							options="PageLocale[locale.code=$currentLocaleCode]"
							field="page"
							renderOption={customRenderOptions}
							optionsStaticRender={
								<>
									<Field field="slug" />
									<Field field="root.role" />
								</>
							}
						/>
					</Block>
					<Block discriminateBy="url" label={locale["External link"]}>
						<TextField label={locale["Url"]} field="url" />
					</Block>
				</DiscriminatedBlocks>
			</HasOne>
		)
	},
	'LinkField',
)
