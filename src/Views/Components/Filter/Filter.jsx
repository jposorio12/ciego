import lupe from "../../../Assets/lupa.png";
import useComponentsControllers from "../../../Controllers/ComponentsControllers";

const Filter = ({
  icon,
  classNameContainer,
  classNameSection,
  activeOnFocus,
  onClickIcon,
}) => {
  const { useFilterCount } = useComponentsControllers();
  const { handleBlockIfNumber, navigate } = useFilterCount();

  return (
    <section
      className={`px-[16px] py-[8px] max-w-[400px] mx-auto ${classNameSection}`}
    >
      <div className="flex items-center justify-center gap-[4px]">
        <div
          className={`bg-white rounded-[80px] w-full h-[40px] flex px-[16px] py-[8px] gap-[8px] ${classNameContainer}`}
        >
          <img src={lupe} alt="icon" className="h-[24px] w-[24px]" />
          <input
            type="number"
            className="outline-none placeholder:font-inter placeholder:font-normal placeholder:text-[14px] placeholder:text-[#4D4D4D]"
            onKeyDown={handleBlockIfNumber}
            placeholder="Buscar conteo..."
            onFocus={() => !activeOnFocus && navigate("/search")}
          />
        </div>
        <img
          src={icon}
          alt="icon"
          className="h-[32px] w-[32px] cursor-pointer"
          onClick={() => onClickIcon && onClickIcon()}
        />
      </div>
    </section>
  );
};

export default Filter;
