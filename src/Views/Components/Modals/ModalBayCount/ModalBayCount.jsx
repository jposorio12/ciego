import close from "../../../../Assets/Clear.png";
import useComponents from "../..";

const ModalBayCount = ({ number, name }) => {
  const { InputAddCount } = useComponents();

  return (
    <div
      className="fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full
      max-w-[400px] bg-white rounded-t-[24px] shadow-buttonCount"
    >
      <div className="flex items-center justify-between w-full max-w-[400px] px-[16px]">
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

      <h4 className="font-inter font-bold text-[18px] text-[#202020] mb-[16px] px-[16px]">
        {number} | {name}
      </h4>

      <div className="w-full max-w-[400px] flex flex-col">
        <InputAddCount
          label={
            <span className="font-inter font-bold text-[14px] text-[#0C2047]">
              Cantidad
            </span>
          }
        />
        <InputAddCount
          label={
            <span className="font-inter font-bold text-[14px] text-[#0C2047]">
              Productos en Avería
            </span>
          }
        />
      </div>
      <div className="bg-[#D3EFFF] p-[16px]">
        <div>
          <h5 className="font-inter font-bold text-[14px] text-[#19418E]">
            TOTAL DEL CONTEO
          </h5>
          <p className="font-inter font-extrabold text-[48px] text-[#19418E] flex gap-[8px] items-center">
            01
            <span className="font-inter font-bold text-[14px] text-[#19418E]">
              SKU
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBayCount;