import * as React from 'react'
import { Block, BlockRepeater, CheckboxField, Component, Repeater, TextField } from '@contember/admin'
import locale from '../locales'

export const FormInputs = Component(
	() => (
		<BlockRepeater
			field="inputs"
			label={undefined}
			discriminationField="type"
			sortableBy="order"
			addButtonText="Add form input"
		>
			<Block
				discriminateBy="shortAnswer"
				label={locale['Short answer']}
			>
				<TextField field="question" label={locale['Question']} />
				<TextField field="placeholder" label={locale['Placeholder']} />
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="paragraph"
				label={locale['Paragraph']}
			>
				<TextField field="question" label={locale['Question']} />
				<TextField field="placeholder" label={locale['Placeholder']} />
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="multipeChoice"
				label={locale['Multipe choice']}
			>
				<TextField field="question" label={locale['Question']} />
				<Repeater
					field="options"
					label={locale['Options']}
					sortableBy="order"
				>
					<TextField field="value" label={locale['Answer']} />
				</Repeater>
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="checkBoxes"
				label={locale['Check Boxes']}
			>
				<TextField field="question" label={locale['Question']} />
				<Repeater
					field="options"
					label={locale['Options']}
					sortableBy="order"
				>
					<TextField field="value" label={locale['Answer']} />
				</Repeater>
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="dropDown"
				label={locale['Drop down']}
			>
				<TextField field="question" label={locale['Question']} />
				<Repeater
					field="options"
					label={locale['Options']}
					sortableBy="order"
				>
					<TextField field="value" label={locale['Answer']} />
				</Repeater>
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="fileUpload"
				label={locale['File upload']}
			>
				<TextField field="question" label={locale['Question']} />
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="date"
				label={locale['Date']}
			>
				<TextField field="question" label={locale['Question']} />
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

			<Block
				discriminateBy="dateTime"
				label={locale['Date and time']}
			>
				<TextField field="question" label={locale['Question']} />
				<CheckboxField field="required" label={locale['Required']} defaultValue={false} />
			</Block>

		</BlockRepeater>
	),
	'ContentBlocks',
)
