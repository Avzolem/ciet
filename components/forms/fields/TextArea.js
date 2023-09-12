const TextArea = ({
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
            <label
                htmlFor={name}
                className="block text-sm font-medium text-black"
            >
                {label}
            </label>
            <div className="mt-1">
                <textarea
                    rows={4}
                    name={name}
                    id={name}
                    className="border focus:ring-buttonbg focus:border-buttonbg block w-full rounded-sm border-gray-200 placeholder-gray-300 text-black shadow-sm sm:text-sm"
                    placeholder={placeholder}
                    defaultValue={""}
                    {...register}
                />
            </div>
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        </div>
    );
};

export default TextArea;
