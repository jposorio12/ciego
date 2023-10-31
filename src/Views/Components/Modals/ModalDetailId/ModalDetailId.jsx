import close from "../../../../Assets/Clear.png";
import pencil from "../../../../Assets/pencil.png";
import deleteIcon from "../../../../Assets/DeleteClipboard.png";
// import add from "../../../../Assets/AddCircleBlue.png";

const ModalDetailId = ({ setOpen, setOpenCancel, handleStep }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div
        className="fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full
     sm:max-w-[400px] bg-white rounded-t-[24px] shadow-buttonCount z-[2] px-[16px] pt-[16px] pb-[32px]"
      >
        <div className="flex justify-between mb-[16px]">
          <h2 className="font-inter font-bold text-[14px] text-[#4D4D4D]">
            Opciones de conteo
          </h2>
          <img
            src={close}
            alt="icon"
            className="h-[32px] w-[32px] cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <div
            className="flex items-center gap-[24px] cursor-pointer"
            onClick={handleStep}
          >
            <img src={pencil} alt="icon" className="w-[32px] h-[32px]" />
            <h4 className="font-inter font-bold text-[18px] text-[#19418E]">
              Editar Conteo
            </h4>
          </div>
          {/* <div className="flex items-center gap-[24px] cursor-pointer"> */}
          {/*   <img src={add} alt="icon" className="h-[32px] w-[32px]" /> */}
          {/*   <h4 className="font-inter font-bold text-[18px] text-[#19418E]"> */}
          {/*     Agregar SKU */}
          {/*   </h4> */}
          {/* </div> */}
          <div
            className="flex items-center gap-[24px] cursor-pointer"
            onClick={() => {
              setOpen(false);
              setOpenCancel(true);
            }}
          >
            <img src={deleteIcon} alt="icon" className="h-[32px] w-[32px]" />
            <h4 className="font-inter font-bold text-[18px] text-[#FF1130]">
              Cancelar conteo
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetailId;
