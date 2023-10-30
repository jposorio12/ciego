import { useState } from "react";
import useComponents from "../..";
import saveDisabled from "../../../../Assets/saveDisabled.png";
import save from "../../../../Assets/saveEnabled.png";
import close from "../../../../Assets/Clear.png";

const ModalBay = ({
  number,
  name,
  bays,
  setOpenBay,
  setOpenBayCount,
  setValue,
}) => {
  const { ButtonDefault } = useComponents();
  const [selected, setSelected] = useState("");

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
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
        <div className="grid grid-cols-2 max-w-[400px] mx-auto gap-y-[8px] gap-x-[16px] px-[16px] mt-[7px]">
          {bays?.map((bay) => (
            <div
              key={bay}
              onClick={() => {
                setSelected(bay);
                setValue("bay", bay);
              }}
              className={`w-[148px] h-[55px] rounded-[16px] p-[8px] border-[2px] border-solid border-[#19418E] cursor-pointer 
              ${
                selected === bay ? "bg-[#19418E]" : "bg-[#EAF0FB]"
              } flex items-center justify-center`}
            >
              <span
                className={`font-inter font-bold text-[18px] ${
                  selected === bay ? "text-white" : "text-[#19418E]"
                }`}
              >
                {bay}
              </span>
            </div>
          ))}
        </div>

        <ButtonDefault
          text="Guardar"
          icon={selected?.length > 0 ? save : saveDisabled}
          disabled={!selected.length > 0}
          classNameButton={`w-[90%] max-w-[400px] ${
            selected?.length > 0 ? "bg-[#19418E]" : "bg-[#E8E8E8]"
          } h-[64px] rounded-[32px] flex mt-[42px] mb-[32px]
        items-center justify-center gap-[16px] mx-auto`}
          classNameSpan={`font-inter font-bold text-[18px] ${
            selected?.length > 0 ? "text-white" : "text-[#A6A6A6]"
          }`}
          onClick={() => {
            setOpenBay(false);
            setOpenBayCount(true);
          }}
        />
      </div>
    </div>
  );
};

export default ModalBay;
