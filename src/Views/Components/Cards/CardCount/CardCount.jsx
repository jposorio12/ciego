import clock from "../../../../Assets/Clock.png";
import truck from "../../../../Assets/Truck.png";
import useComponentsControllers from "../../../../Controllers/ComponentsControllers";

const CardCount = ({
  numberRoute,
  date,
  state,
  lastUpdate,
  numberDriver,
  truckSheet,
  plaque,
  driver,
  onClick,
  isDetail,
}) => {
  const { useCardCount } = useComponentsControllers();
  const { states } = useCardCount();

  const style = states?.[state];

  return (
    <div
      className={`${style ? style?.style : "bg-white"} rounded-[16px] ${
        isDetail ? "w-full rounded-b-[16px]" : "w-[90%] rounded-[16px]"
      } max-w-[400px] mx-auto overflow-hidden cursor-pointer shadow-buttonCount`}
      onClick={onClick}
    >
      <div className="flex mb-[8px] px-[16px] pt-[8px]">
        <div className="w-[168px] border-r-solid border-r-[1px] border-r-[#E8E8E8] mr-[24px]">
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                style ? style?.style : "text-[#19418E]"
              }`}
            >
              Número de ruta
            </h5>
            <h5
              className={`font-inter font-bold text-[32px] ${
                state === 3 ? "text-[#797979]" : "text-[#202020]"
              }`}
            >
              {numberRoute}
            </h5>
          </div>
          {date && (
            <div>
              <h5 className="font-inter font-normal text-[10px] text-[#797979]">
                Fecha de creación
              </h5>
              <h5 className="font-inter font-normal text-[14px] text-[#4D4D4D]">
                {date}
              </h5>
            </div>
          )}
        </div>

        <div>
          <div className="mb-[8px]">
            <h5
              className={`font-inter font-normal text-[10px] ${
                style ? style.style : "text-[#19418E]"
              } mb-[8px]`}
            >
              Estado en SAP
            </h5>
            <div
              className={`flex gap-[4px] ${
                style ? style?.styleSap : "bg-[#FFC610]"
              } h-[28px] rounded-[80px] items-center w-[120px] p-[2px]`}
            >
              <img
                src={style ? style.img : clock}
                alt="icon"
                className="w-[24px] h-[24px]"
              />
              <h5
                className={`font-inter font-bold text-[12px] ${
                  style ? style?.styleSap : "text-[#202020]"
                }`}
              >
                {states?.[state]?.text}
              </h5>
            </div>
          </div>

          {lastUpdate && (
            <div className="mt-[12px]">
              <h5 className="font-inter font-normal text-[10px] text-[#797979]">
                Última actualización
              </h5>
              <h5 className="font-inter font-normal text-[14px] text-[#4D4D4D]">
                {lastUpdate}
              </h5>
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex  ${
          state === 3 ? "bg-[#c7c7c7]" : "bg-[#d3efff80]"
        } px-[16px] py-[8px] gap-[18px]`}
      >
        <img
          src={style ? style?.imgBottom : truck}
          alt="icon"
          className="h-[32px] w-[32px]"
        />
        <div className="flex flex-wrap justify-between w-full gap-[4px]">
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                style ? style.bottom : "text-[#19418E]"
              }`}
            >
              Transportador
            </h5>
            <p
              className={`font-inter font-bold text-[14px] ${
                style ? style.bottom : "text-[#00314e]"
              }`}
            >
              {numberDriver}
            </p>
          </div>
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                style ? style.bottom : "text-[#19418E]"
              }`}
            >
              Ficha camión
            </h5>
            <p
              className={`font-inter font-bold text-[14px] ${
                style ? style.bottom : "text-[#00314e]"
              }`}
            >
              {truckSheet}
            </p>
          </div>
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                style ? style.bottom : "text-[#19418E]"
              }`}
            >
              Placa
            </h5>
            <p
              className={`font-inter font-bold text-[14px] ${
                style ? style.bottom : "text-[#00314e]"
              }`}
            >
              {plaque}
            </p>
          </div>
          {driver && (
            <div>
              <h5
                className={`font-inter font-normal text-[10px] ${
                  style ? style.bottom : "text-[#19418E]"
                }`}
              >
                Conductor
              </h5>
              <p
                className={`font-inter font-bold text-[14px] ${
                  style ? style.bottom : "text-[#00314e]"
                }`}
              >
                {driver}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardCount;
