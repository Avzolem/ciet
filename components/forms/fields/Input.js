const Input = ({
	label,
	name,
	type,
	placeholder = "",
	errorMessage = "",
	register,
	...rest
}) => {
	const className = { ...rest.className };

	return (
		<div className={className}>
			<label htmlFor={name} className="block text-sm font-medium text-gray-600">
				{label}
			</label>
			<div className="mt-1">
				<input
					type={type}
					name={name}
					id={name}
					className="focus:ring-inputfocus focus:border-inputfocus block w-full py-1 rounded-sm border-gray-300 text-black shadow-sm sm:text-sm"
					placeholder={placeholder}
					{...register}
					{...rest}
				/>
			</div>
			<p className="mt-2 text-sm text-red-600">{errorMessage}</p>
		</div>
	);
};

export default Input;
