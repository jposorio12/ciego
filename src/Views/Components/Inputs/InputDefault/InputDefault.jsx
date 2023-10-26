import { useState } from "react";
import { Controller } from "react-hook-form";

const InputDefault = ({
  name,
  control,
  defaultValue,
  type,
  value,
  label,
  classNameContainerInput,
  classNameInput,
  classNameContainer,
  classNameLabel,
  placeholder,
  updateValue,
  icon,
  iconRight,
  errors,
}) => {
  const [typeInput, setTypeInput] = useState(true);
  const error = errors[name]?.message;

  const handleBlockIfNumber = (e) => {
    const blockedNumbers = ["e", "+", "-", "."];
    if (type === "number") {
      if (blockedNumbers.some((n) => n === `${e.key}`.toLocaleLowerCase())) {
        e.preventDefault();
      }
    }
  };

  return (
    <div className={classNameContainer}>
      <label className={classNameLabel}>{label}</label>
      <Controller
        id={name}
        name={name}
        control={control}
        defaultValue={defaultValue ?? ""}
        render={({ field: { onChange, name } }) => (
          <div>
            <div
              className={`${classNameContainerInput} ${
                error && "border-[#FF1130]"
              }`}
            >
              {icon && (
                <img className="h-[24px] w-[24px]" src={icon} alt="icon" />
              )}
              <input
                className={classNameInput}
                placeholder={placeholder}
                type={
                  name === "password" ? (typeInput ? "password" : "text") : type
                }
                value={value}
                onChange={({ target }) => {
                  const value = target.value;
                  onChange(value);
                  updateValue && updateValue(value);
                }}
                onKeyDown={handleBlockIfNumber}
                name={name}
                autoComplete="off"
              />
              {iconRight && (
                <img
                  src={iconRight}
                  onClick={() => {
                    if (name === "password") {
                      setTypeInput((prev) => !prev);
                    }
                  }}
                  alt="icon"
                  className="h-[24px] w-[24px] cursor-pointer"
                />
              )}
            </div>
            {error && (
              <p className="bg-[#FF1130] text-white mt-[4px] pl-[4px] font-inter font-bold text-[12px]">
                {error}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default InputDefault;
