import arrow from "../../../../Assets/ArrowLeft.png";
import trash from "../../../../Assets/trashWhite.png";
import useComponents from "../..";

const ModalCreateError = ({
  icon,
  title,
  text,
  setStep,
  sku,
  onClick,
  onclickArrow,
}) => {
  const { ButtonDefault } = useComponents();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div className="relative w-full h-full bg-no-repeat bg-cover cursor-pointer bg-background">
        <img
          src={arrow}
          alt="arrow"
          className="w-[32px] h-auto pt-[10px] mx-[10px] cursor-pointer"
          onClick={() => {
            onclickArrow && onclickArrow();
            setStep && setStep(1);
          }}
        />
        <img
          src={icon}
          alt="succes"
          className="w-[195px] h-auto pt-[150px] mx-auto"
        />
        <h1 className="font-inter font-bold text-[32px] text-white mx-auto text-center leading-[40px] my-[16px] px-[12px]">
          {title}
        </h1>
        <h2 className="font-inter font-normal text-[18px] text-white text-center px-[16px]">
          {text}
        </h2>
        {sku && (
          <ButtonDefault
            text="Eliminar"
            classNameButton="shadow-buttonCount bg-[#FF1130] h-[64px] w-[80%] max-w-[400px] rounded-[32px] mx-auto flex items-center justify-center mt-[120px] cursor-pointer gap-[16px]"
            icon={trash}
            classNameSpan="text-white font-inter font-bold text-[18px]"
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
};

export default ModalCreateError;
