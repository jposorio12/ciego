import { Controller } from "react-hook-form";

const SelectDefault = ({
  label,
  placeholder,
  options,
  classNameSelect,
  name,
  control,
  errors,
}) => {
  return (
    <Controller
      id={name}
      name={name}
      control={control}
      render={({ field: { onChange, name, value } }) => (
        <div className="max-w-[400px] w-full flex flex-col mt-[8px]">
          {label}
          <select
            onChange={({ target }) => {
              onChange(target.value);
            }}
            className={`${classNameSelect} cursor-pointer ${
              value
                ? "!border-[#19418E] bg-[#D3EFFF33] border-[2px]"
                : "!border-[#A6A6A6] bg-white"
            } ${errors[name]?.message && "!border-[1px] border-[#FF1130]"}`}
            defaultValue={placeholder}
            value={value}
          >
            <option
              value={placeholder}
              disabled
              className="font-inter font-normal text-[14px] text-[#797979] h-[40px]"
            >
              {placeholder}
            </option>
            {options?.map((value) => (
              <option
                key={value}
                value={value}
                className="h-[40px] font-inter font-normal text-[14px]"
              >
                {value}
              </option>
            ))}
          </select>
          {errors[name]?.message && (
            <p className="bg-[#FF1130] text-white mt-[4px] pl-[4px] font-inter font-bold text-[12px]">
              {errors[name]?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default SelectDefault;
