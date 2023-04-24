export const FormInput = ({
  label,
  input_type,
  name,
  onChange,
  placeholder,
  formState
}) => {

  return (
    <div className="mb-4 flex items-end lg:w-[45%] ">
      <label className=" " htmlFor={name}>
        {label}
      </label>
      <input
        className="font-frente flex-1 bg-transparent border-b-[1px] px-2  "
        type={input_type}
        name={name}
        // value={formState.name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
