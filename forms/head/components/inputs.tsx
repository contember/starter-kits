function ShortAnswer({ id, question, placeholder, required }) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>{question}</label>
			<input type="text" id={id} name={id} placeholder={placeholder} required={required} />
		</div>
	)
}

function Paragraph({ id, question, placeholder, required }) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>{question}</label>
			<textarea id={id} name={id} placeholder={placeholder} required={required} />
		</div>
	)
}

function MultipeChoice({ question, options, id: questionId }) {
	return (
		<div className="input-wrapper">
			{question}
			{options?.map(({ id, textAnswer }) => (
				<>
					<label htmlFor={id}>
						<input type="radio" id={id} key={id} name={questionId} value={textAnswer} />
						{textAnswer}
					</label>
				</>
			))}
		</div>
	)
}

function CheckBoxes({ question, options }) {
	return (
		<div className="input-wrapper">
			{question}
			{options?.map(({ id, textAnswer }) => (
				<>
					<label htmlFor={id}>
						<input type="checkbox" id={id} key={id} name={id} />
						{textAnswer}
					</label>
				</>
			))}
		</div>
	)
}

function DropDown({ question, options, id }) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>{question}</label>
			<select>
				{options?.map(({ id, textAnswer }) => (
					<option id={id} key={id} value={id} >{textAnswer}</option>
				))}
			</select>
		</div>
	)
}

function FileUpload({ question, id }) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>{question}</label>
			<input type="file" id={id} name={id}/>
		</div>
	)
}

function Date({ question, id }) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>{question}</label>
			<input type="date" id={id} name={id}/>
		</div>
	)
}

function DateTime({ question, id }) {
	return (
		<div className="input-wrapper">
			<label htmlFor={id}>{question}</label>
			<input type="datetime-local" id={id} name={id}/>
		</div>
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
