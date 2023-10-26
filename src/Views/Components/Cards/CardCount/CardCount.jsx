import clock from "../../../../Assets/Clock.png";
import truck from "../../../../Assets/Truck.png";

const CardCount = ({
  numberRoute,
  date,
  state,
  lastUpdate,
  numberDriver,
  truckSheet,
  plaque,
  driver,
}) => {
  return (
    <div className="bg-white rounded-[16px] w-[90%] max-w-[400px] mx-auto overflow-hidden cursor-pointer">
      <div className="flex mb-[8px] px-[16px] pt-[8px]">
        <div className="w-[168px] border-r-solid border-r-[1px] border-r-[#E8E8E8] mr-[24px]">
          <div>
            <h5 className="font-inter font-normal text-[10px] text-[#19418E]">
              Número de ruta
            </h5>
            <h5 className="font-inter font-bold text-[32px]">{numberRoute}</h5>
          </div>
          <div>
            <h5 className="font-inter font-normal text-[10px] text-[#797979]">
              Fecha de creación
            </h5>
            <h5 className="font-inter font-normal text-[14px] text-[#4D4D4D]">
              {date}
            </h5>
          </div>
        </div>

        <div>
          <div className="mb-[8px]">
            <h5 className="font-inter font-normal text-[10px] text-[#19418E] mb-[8px]">
              Estado en SAP
            </h5>
            <div className="flex gap-[4px] bg-[#FFC610] h-[28px] rounded-[80px] items-center w-[120px] p-[2px]">
              <img src={clock} alt="icon" className="w-[24px] h-[24px]" />
              <h5 className="font-inter font-bold text-[12px] text-[#202020]">
                {state}
              </h5>
            </div>
          </div>

          <div className="mt-[12px]">
            <h5 className="font-inter font-normal text-[10px] text-[#797979]">
              Última actualización
            </h5>
            <h5 className="font-inter font-normal text-[14px] text-[#4D4D4D]">
              {lastUpdate}
            </h5>
          </div>
        </div>
      </div>

      <div className="flex bg-[#E9F7FF] px-[16px] py-[8px] gap-[18px]">
        <img src={truck} alt="icon" className="h-[32px] w-[32px]" />
        <div className="flex flex-wrap justify-between">
          <div>
            <h5 className="font-inter font-normal text-[10px] text-[#19418E]">
              Transportador
            </h5>
            <p className="font-inter font-bold text-[14px] text-[#00324D]">
              {numberDriver}
            </p>
          </div>
          <div>
            <h5 className="font-inter font-normal text-[10px] text-[#19418E]">
              Ficha camión
            </h5>
            <p className="font-inter font-bold text-[14px] text-[#00324D]">
              {truckSheet}
            </p>
          </div>
          <div>
            <h5 className="font-inter font-normal text-[10px] text-[#19418E]">
              Placa
            </h5>
            <p className="font-inter font-bold text-[14px] text-[#00324D]">
              {plaque}
            </p>
          </div>
          <div>
            <h5 className="font-inter font-normal text-[10px] text-[#19418E]">
              Conductor
            </h5>
            <p className="font-inter font-bold text-[14px] text-[#00324D]">
              {driver}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCount;
