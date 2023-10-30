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
  iconEye,
  errors,
  inputCreate,
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
        render={({ field: { onChange, name, value: valueForm } }) => (
          <div>
            <div
              className={`${classNameContainerInput} ${
                error && "border-[#FF1130]"
              } ${
                (value || valueForm) &&
                inputCreate &&
                "!border-[#19418E] bg-[#D3EFFF33] border-[2px]"
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
                value={value ?? valueForm}
                onChange={(e) => {
                  const value = e.target.value;
                  if (type === "number" && Number(value) < 0) {
                    e.target.value = 0;
                    onChange(0);
                    updateValue && updateValue(value);
                  } else {
                    onChange(value);
                    updateValue && updateValue(value);
                  }
                }}
                onKeyDown={handleBlockIfNumber}
                name={name}
                autoComplete="off"
              />
              {iconRight && (
                <img
                  src={name === "password" && !typeInput ? iconEye : iconRight}
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
