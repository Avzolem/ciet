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
                className="block text-sm font-medium text-white"
            >
                {label}
            </label>
            <div className="mt-1">
                <textarea
                    rows={4}
                    name={name}
                    id={name}
                    className="focus:ring-buttonbg focus:border-buttonbg block w-full rounded-sm border-gray-300 placeholder-gray-300 shadow-sm sm:text-sm"
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
