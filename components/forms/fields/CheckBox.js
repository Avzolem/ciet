const CheckBox = ({
	label,
	name,
	description = "",
	errorMessage = "",
	register,
	...rest
}) => {
	return (
		<div className="relative flex items-start">
			<div className="flex h-5 items-center">
				<input
					id={name}
					name={name}
					{...register}
					type="checkbox"
					className="focus:ring-buttonbg h-4 w-4 rounded border-gray-300 text-black"
					{...rest}
				/>
			</div>
			<div className="ml-3 text-sm">
				<label htmlFor="comments" className="font-medium  text-gray-400">
					{label}
				</label>
				<p id="comments-description text-black" className="text-black">
					{description}
				</p>
				<p className="mt-2 text-sm text-red-600">{errorMessage}</p>
			</div>
		</div>
	);
};

export default CheckBox;
