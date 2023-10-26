import useComponents from "../..";
import save from "../../../../Assets/saveDisabled.png";
import close from "../../../../Assets/Clear.png";

const ModalBay = ({ number, name, bays, setOpenBay }) => {
  const { ButtonDefault } = useComponents();

  return (
    <div
      className="fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full pb-[20px]
     px-[16px] max-w-[400px] bg-white rounded-t-[24px] shadow-buttonCount"
    >
      <div className="flex items-center justify-between px-[8px] w-full max-w-[400px]">
        <h3 className="font-inter font-bold text-[14px] text-[#3D73DD] my-[24px]">
          Configura el SKU
        </h3>
        <img
          src={close}
          alt="icon"
          className="w-[26px] h-[26px] cursor-pointer"
          onClick={() => setOpenBay(false)}
        />
      </div>

      <h4 className="font-inter font-bold text-[18px] text-[#202020] mb-[16px]">
        {number} | {name}
      </h4>
      <h3 className="font-inter font-bold text-[14px] text-[#0C2047]">
        Selecciona una bahia
      </h3>
      <div className="flex flex-wrap items-center justify-center max-w-[400px] mx-auto gap-y-[8px] gap-x-[16px] px-[16px] mt-[7px]">
        {bays?.map((bay) => (
          <div
            key={bay}
            className="w-[148px] h-[55px] rounded-[16px] p-[8px] border-[2px] border-solid border-[#19418E] bg-[#EAF0FB]
            flex items-center justify-center"
          >
            <span className="font-inter font-bold text-[18px] text-[#19418E]">
              {bay}
            </span>
          </div>
        ))}
      </div>
      <ButtonDefault
        text="Guardar"
        icon={save}
        classNameButton="w-[90%] max-w-[400px] bg-[#E8E8E8] h-[64px] rounded-[32px] flex mt-[42px] mb-[32px]
        items-center justify-center gap-[16px] mx-auto"
        classNameSpan="font-inter font-bold text-[18px] text-[#A6A6A6]"
      />
    </div>
  );
};

export default ModalBay;
