export default function (props: any) {
	const { errors } = props

	return (
		<>
			{errors.map((error: { message: string, code: string }, index: number) => (
				<div className="error" key={index}>
					<p>{error.message}</p>
					<p>{error.code}</p>
				</div>
			))}
		</>
	)
}
