import add from "../../../../Assets/AddSymbol.png";

const CardSkuCount = ({ number, name, measure, index, onClick }) => {
  return (
    <div className="flex max-w-[400px] mx-auto justify-center px-[16px] pb-[16px] border-b-[1px] border-solid border-[#E8E8E8] mt-[20px]">
      <div className="flex flex-col grow">
        <h3
          className={`font-inter font-bold text-[10px] text-[#016399] ${
            index !== 0 && "hidden"
          }`}
        >
          SKU
        </h3>
        <h4 className="font-inter font-bold text-[14px] text-[#202020] h-[60px] flex items-center break-all w-[70%]">
          {number}
        </h4>
      </div>
      <div className="max-w-[207px]">
        <h3
          className={`font-inter font-bold text-[10px] text-[#016399] ${
            index !== 0 && "hidden"
          }`}
        >
          Descripción
        </h3>
        <h4 className="font-inter font-bold text-[14px] text-[#202020]">
          {name}
        </h4>
        <h5 className="font-inter font-bold text-[12px] text-[#016399] mt-[2px]">
          Unidad de medida: {measure}
        </h5>
      </div>
      <div className="flex flex-col grow">
        <h3
          className={`font-inter font-bold text-[10px] text-[#016399] ${
            index !== 0 && "hidden"
          }`}
        >
          Agregar
        </h3>
        <button
          className="w-[32px] h-[32px] rounded-full border-[2px] border-solid border-[#19418E] flex cursor-pointer
          items-center justify-center mt-[15px]"
          onClick={() => {
            onClick(number, name);
          }}
        >
          <img src={add} alt="icon" className="h-[16px] w-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default CardSkuCount;
