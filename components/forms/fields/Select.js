const Select = ({
    label,
    name,
    options = [],
    placeholder = "Selecciona una opción",
    errorMessage = "",
    register,
    ...rest
}) => {
    const className = { ...rest.className };

    return (
        <div className={className}>
            <label
                htmlFor={name}
                className="block text-sm font-medium text-black"
            >
                {label}
            </label>
            <div className="mt-1">
                <select
                    id={name}
                    name={name}
                    className="focus:ring-buttonbg focus:border-buttonbg mt-1 block w-full rounded-sm border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none sm:text-sm"
                    defaultValue=""
                    {...register}
                >
                    <option value="Si">Si</option>
                    <option value="No">No</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        </div>
    );
};

export default Select;
