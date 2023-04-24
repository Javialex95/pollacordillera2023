export const FormInputTwo = ({ label, input_type, name, placeholder, onChange }) => {
  return (
    <div className="mb-4 w-[45%] ">
      <input
        className="font-frente flex-1 bg-transparent border-b-[1px] w-full "
        type={input_type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
      <label className="block text-xs" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
