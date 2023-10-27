import close from "../../../../Assets/Clear.png";
import save from "../../../../Assets/saveEnabled.png";
import saveDisabled from "../../../../Assets/saveDisabled.png";
import useComponents from "../..";

const ModalBayCount = ({ number, name }) => {
  const { InputAddCount, ButtonDefault, SelectDefault } = useComponents();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div
        className="fixed bottom-0 left-[50%] transform translate-x-[-50%] w-full
      max-w-[360px] md:max-w-[400px] bg-white rounded-t-[24px] shadow-buttonCount"
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
        {/* <div> */}
        {/*   <SelectDefault */}
        {/*     control={[]} */}
        {/*     placeholder="Daños" */}
        {/*     classNameSelect="h-[45px] border-[1px] border-solid border-[#A6A6A6] outline-none rounded-[4px] px-[6px] mt-[4px] */}
        {/*     font-inter font-normal text-[14px]" */}
        {/*     options={["as", "ab"]} */}
        {/*     name="fault" */}
        {/*     label={ */}
        {/*       <span className="font-inter font-bold text-[14px] text-[#0C2047]"> */}
        {/*         Motivo avería <span className="text-[#FF1130]">*</span> */}
        {/*       </span> */}
        {/*     } */}
        {/*   /> */}
        {/* <SelectDefault */}
        {/*   control={[]} */}
        {/*   placeholder="Medidas" */}
        {/*   name="measure" */}
        {/*   classNameSelect="h-[45px] border-[1px] border-solid border-[#A6A6A6] outline-none rounded-[4px] px-[6px] mt-[4px] */}
        {/*   font-inter font-normal text-[14px]" */}
        {/*   options={["as", "ab"]} */}
        {/*   label={ */}
        {/*     <span className="font-inter font-bold text-[14px] text-[#0C2047]"> */}
        {/*       Unidad de medida <span className="text-[#FF1130]">*</span> */}
        {/*     </span> */}
        {/*   } */}
        {/* /> */}
        {/* </div> */}
        <div className="bg-[#D3EFFF] p-[16px] flex items-center justify-center">
          <div className="flex flex-col grow">
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
          <ButtonDefault
            text="Guardar"
            icon={save}
            classNameButton="flex items-center justify-center bg-[#19418E] rounded-[32px] w-[178px] h-[64px] gap-[16px] cursor-pointer"
            classNameSpan="font-inter font-bold text-[18px] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ModalBayCount;
