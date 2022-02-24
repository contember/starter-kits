function ShortAnswer({ id, question, placeholder, required }) {
	return (
		<>
			<label htmlFor={id}>{question}</label>
			<input type="text" id={id} name={id} placeholder={placeholder} required={required} />
		</>
	)
}

function Paragraph({ id, question, placeholder, required }) {
	return (
		<>
			<label htmlFor={id}>{question}</label>
			<textarea id={id} name={id} placeholder={placeholder} required={required} />
		</>
	)
}

function MultipeChoice({ question, options, id: questionId }) {
	return (
		<fieldset key={questionId}>
			<legend>{question}</legend>
			{options?.map(({ id, value }) => (
				<label>
					<input type="radio" key={id} name={questionId} value={value} />
					{value}
				</label>
			))}
		</fieldset>
	)
}

function CheckBoxes({ question, options, id: questionId }) {
	return (
		<fieldset key={questionId}>
			<legend>{question}</legend>
			{options?.map(({ id, value }) => (
				<label htmlFor={id}>
					<input type="checkbox" id={id} key={id} name={questionId} value={value} />
					{value}
				</label>
			))}
		</fieldset>
	)
}

function DropDown({ question, options, id }) {
	return (
		<>
			<label htmlFor={id}>{question}</label>
			<select id={id} name={id}>
				{options?.map(({ id, value }) => (
					<option id={id} key={id} value={value}>{value}</option>
				))}
			</select>
		</>
	)
}

function FileUpload({ question, id }) {
	return (
		<>
			<label htmlFor={id}>{question}</label>
			<input type="file" id={id} name={id} />
		</>
	)
}

function Date({ question, id }) {
	return (
		<>
			<label htmlFor={id}>{question}</label>
			<input type="date" id={id} name={id} />
		</>
	)
}

function DateTime({ question, id }) {
	return (
		<>
			<label htmlFor={id}>{question}</label>
			<input type="datetime-local" id={id} name={id} />
		</>
	)
}

export default function Inputs({ inputs }) {
	return inputs ? inputs.map((input: any) => {
		const inputElements = {
			shortAnswer: <ShortAnswer {...input} key={input.id} />,
			paragraph: <Paragraph {...input} key={input.id} />,
			multipeChoice: <MultipeChoice {...input} key={input.id} />,
			checkBoxes: <CheckBoxes {...input} key={input.id} />,
			dropDown: <DropDown {...input} key={input.id} />,
			fileUpload: <FileUpload {...input} key={input.id} />,
			date: <Date {...input} key={input.id} />,
			dateTime: <DateTime {...input} key={input.id} />,
		}

		return inputElements[input.type]
	}) : null
}
