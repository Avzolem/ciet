const CountryOptions = [
	{ value: "MX", label: "MX" },
	{ value: "US", label: "US" },
];

const PhoneInput = ({
	label,
	name,
	placeholder = "",
	errorMessage = "",
	register,
	selectRegister,
	...rest
}) => {
	const className = { ...rest.className };

	return (
		<div>
			<label htmlFor="phone-number" className="block text-sm font-medium">
				Número de teléfono{" "}
			</label>
			<div className="relative mt-1 rounded-sm shadow-sm">
				<div className="absolute inset-y-0 left-0 flex items-center">
					<label htmlFor="country" className="sr-only">
						{label}
					</label>
					<select
						id="country"
						name="country"
						autoComplete="country"
						className="focus:border-buttonbg focus:ring-buttonbg h-full text-black rounded-sm border-transparent bg-transparent py-0 pl-3 pr-7  sm:text-sm"
						{...selectRegister}>
						{CountryOptions.map((option) => (
							<option
								key={option.value}
								value={option.value}
								defaultValue={CountryOptions[0].value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
				<input
					type="text"
					name={name}
					id="phone-number"
					className="border border-gray-200 focus:border-buttonbg focus:ring-buttonbg block w-full rounded-sm  py-1 pl-24 text-black sm:text-sm"
					placeholder={placeholder}
					{...register}
					{...rest}
				/>
			</div>
			<p className="mt-2 text-sm font-semibold text-red-600">{errorMessage}</p>
		</div>
	);
};

export default PhoneInput;
