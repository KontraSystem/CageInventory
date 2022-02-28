function InputField({
	name = 'field',
	onChange,
	value,
	label,
	type = 'text',
	required = true,
}) {
	return (
		<div>
			{label && (
				<label
					className="mb-2 block text-gray-700 text-sm font-bold"
					htmlFor={name}
				>
					{label}
				</label>
			)}
			<input
				value={value}
				onChange={onChange}
				type={type}
				name={name}
				className="p-2 w-80 focus:border-purple-700 rounded border-2 outline-none"
				autoComplete="off"
				required={required}
			/>
		</div>
	)
}

export default InputField
