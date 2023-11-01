import lupe from "../../../Assets/lupa.png";
import errorIcon from "../../../Assets/atentionFilter.png";
import useComponentsControllers from "../../../Controllers/ComponentsControllers";

const Filter = ({
  icon,
  classNameContainer,
  classNameSection,
  activeOnFocus,
  onClickIcon,
  handleChange,
  placeholder,
  classNameInput,
  handleFocus,
  error,
  value
}) => {
  const { useFilterCount } = useComponentsControllers();
  const { handleBlockIfNumber } = useFilterCount();

  return (
    <section
      className={`mx-auto px-[16px] py-[8px] max-w-[400px] ${classNameSection}`}
    >
      <div className="flex items-center justify-center gap-[4px]">
        <div
          className={`flex w-full bg-white rounded-[80px] h-[40px] px-[16px] py-[8px] gap-[8px] ${classNameContainer}`}
        >
          <img src={lupe} alt="icon" className="h-[24px] w-[24px]" />
          <input
            type="number"
            value={value}
            className={`outline-none placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:text-[#4D4D4D] grow
            ${classNameInput}`}
            onKeyDown={handleBlockIfNumber}
            placeholder={placeholder ?? "Buscar conteo..."}
            onChange={handleChange}
            onFocus={() => activeOnFocus && handleFocus()}
          />
          {error && (
            <img
              src={errorIcon}
              alt="icon"
              className="h-[24px] w-[24px] mt-[-2px]"
            />
          )}
        </div>
        <img
          src={icon}
          alt="icon"
          className={`h-[32px] w-[32px] ${activeOnFocus && "cursor-pointer"}`}
          onClick={() => onClickIcon && onClickIcon()}
        />
      </div>
    </section>
  );
};

export default Filter;
