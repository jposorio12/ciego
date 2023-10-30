import edit from "../../../../Assets/Edit.png";
import check from "../../../../Assets/CheckCircle.png";
import trash from "../../../../Assets/trash.png";

const CardSkuSuccesful = ({
  number,
  name,
  bay,
  quantity,
  fault,
  total,
  measure,
  classNameContainer,
}) => {
  return (
    <div
      className={`${classNameContainer} flex max-w-[400px] mx-auto px-[16px] justify-center bg-[#eafff4] mb-[8px]
      py-[8px] items-center gap-[12px]`}
    >
      <img src={check} alt="edit icon" className="h-[24px] w-[24px]" />
      <div className="flex flex-col grow">
        <div className="flex gap-[8px] mb-[10px] justify-between">
          <div className="w-[40%] sm:w-[50%] flex flex-col flex-wrap">
            <h4 className="font-inter font-bold text-[10px] text-[#016399] mb-[10px]">
              SKU
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020] break-all">
              {number}
            </h5>
          </div>
          <div className="w-[70%] sm:w-[177px]">
            <h4 className="font-inter font-bold text-[10px] text-[#016399]">
              Descripción
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020]">
              {name}
            </h5>
          </div>
          <div className="flex self-center">
            <img
              src={edit}
              alt="edit icon"
              className="h-[24px] w-[24px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <h4 className="font-inter font-bold text-[10px] text-[#016399]">
              Bahía
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020]">
              {bay}
            </h5>
          </div>
          <div>
            <h4 className="font-inter font-bold text-[10px] text-[#016399]">
              Cantidad
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020]">
              {quantity}
            </h5>
          </div>
          <div>
            <h4 className="font-inter font-bold text-[10px] text-[#016399]">
              Avería
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020]">
              {fault}
            </h5>
          </div>
          <div>
            <h4 className="font-inter font-bold text-[10px] text-[#016399]">
              Und. Medida
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020]">
              {measure}
            </h5>
          </div>
          <div>
            <h4 className="font-inter font-bold text-[10px] text-[#016399]">
              Total
            </h4>
            <h5 className="font-inter font-bold text-[14px] text-[#202020]">
              {total}
            </h5>
          </div>
          <img
            src={trash}
            alt="edit icon"
            className="h-[24px] w-[24px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSkuSuccesful;
