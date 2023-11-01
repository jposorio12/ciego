import { useState } from "react";
import clear from "../../../../Assets/clearBlack.png";
import atention from "../../../../Assets/atentionCancel.png";
import useComponents from "../..";

const ModalCancelCount = ({ setOpen, setOpenCancel, handleReasonCancel }) => {
  const { ButtonDefault } = useComponents();
  const [value, setValue] = useState("");

  const handleClose = () => {
    setOpen(false);
    setOpenCancel(false);
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div className="relative w-full h-full bg-white overflow-auto">
        <img
          src={clear}
          alt="icon"
          className="h-[32px] w-[32px] absolute right-[16px] top-[8px] cursor-pointer"
          onClick={handleClose}
        />
        <div className="pt-[50px]">
          <img
            src={atention}
            alt="icon"
            className="h-[130px] w-[195px] mx-auto mb-[8px]"
          />
          <h2
            className="font-inter font-bold text-[32px] text-[#202020] text-center 
            leading-[40px] mb-[8px] max-w-[400px] mx-auto"
          >
            ¿Estás seguro de cancelar este conteo?
          </h2>
          <h3 className="font-inter font-bold text-[18px] text-[#202020] px-[16px] max-w-[400px] mx-auto">
            Ten en cuenta que:
          </h3>
          <ul className="max-w-[400px] mx-auto px-[32px] list-disc font-inter font-normal text-[12px] mt-[4px] mb-[16px]">
            <li>Al cancelar el conteo, ya no podrás recuperarlo.</li>
            <li>
              Para que la cancelación sea efectiva, debes ingresar el motivo por
              el cuál cancelas.
            </li>
            <li>
              Este conteo permanecerá visible en el listado de conteos para su
              visualización.
            </li>
          </ul>
          <div className="max-w-[400px] px-[16px] mx-auto">
            <h4 className="mb-[4px] font-inter font-bold text-[14px] text-[#202020]">
              Motivo de cancelación{" "}
              <span className="ml-[2px] text-[#FF1130]">*</span>
            </h4>
            <textarea
              placeholder="Ingresa el motivo de la cancelación"
              className="w-full h-[64px] border-[1px] border-solid border-[#A6A6A6] px-[8px] py-[10px] outline-none
              placeholder:text-[#797979] placeholder:text-[14px] placeholder:font-inter"
              onChange={({ target }) => {
                if (target.value?.length <= 200) {
                  setValue(target.value);
                }
              }}
              value={value}
            />
            <p className="font-inter font-normal text-[12px] text-[#63687A] mb-[24px]">
              Max. 200 caracteres
            </p>
            <ButtonDefault
              text="Cancelar conteo"
              disabled={value?.length > 0 ? false : true}
              classNameButton={`rounded-[32px] h-[54px] shadow-buttonCount w-full max-w-[400px] mx-auto flex items-center justify-center cursor-pointer ${
                value?.length > 20 ? "bg-[#FF1130]" : "bg-[#E8E8E8]"
              }`}
              classNameSpan={`${
                value?.length > 20 ? "text-white" : "text-[#A6A6A6]"
              } font-inter font-bold text-[18px]`}
              onClick={() => {
                handleReasonCancel(value);
                handleClose();
              }}
            />
            <ButtonDefault
              text="Salir sin cancelar"
              classNameButton="rounded-[32px] h-[54px] w-full max-w-[400px] mx-auto flex items-center justify-center cursor-pointer mt-[10px]"
              classNameSpan="text-[#19418E] font-inter font-bold text-[18px]"
              onClick={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelCount;
