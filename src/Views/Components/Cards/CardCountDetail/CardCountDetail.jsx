import clock from "../../../../Assets/Clock.png";
import arrow from "../../../../Assets/arrowReasonCancel.png";
import truck from "../../../../Assets/Truck.png";
import useComponentsControllers from "../../../../Controllers/ComponentsControllers";

const CardCountDetail = ({
  numberRoute,
  date,
  state,
  lastUpdate,
  numberDriver,
  truckSheet,
  plaque,
  driver,
  onClick,
  reasonCancel,
}) => {
  const { useCardCountDetail } = useComponentsControllers();
  const { states, open, setOpen } = useCardCountDetail();

  const style = states?.[state];

  return (
    <div
      className={`${
        state === 3 ? style?.style : "bg-[#0C2047]"
      } w-full rounded-b-[16px]
       max-w-[400px] mx-auto overflow-hidden cursor-pointer shadow-buttonCount`}
      onClick={onClick}
    >
      <div className="flex mb-[8px] px-[16px] pt-[8px]">
        <div className="w-[168px] border-r-solid border-r-[1px] border-r-[#E8E8E8] mr-[24px]">
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                state === 3 ? style?.style : "text-white"
              }`}
            >
              Número de ruta
            </h5>
            <h5 className={`font-bold text-white font-inter text-[32px]`}>
              {numberRoute}
            </h5>
          </div>
          {date && (
            <div>
              <h5 className={`font-normal text-white font-inter text-[10px]`}>
                Fecha de creación
              </h5>
              <h5 className={`font-normal text-white font-inter text-[14px]`}>
                {date}
              </h5>
            </div>
          )}
        </div>

        <div>
          <div className="mb-[8px]">
            <h5
              className={`font-inter font-normal text-[10px] ${
                state === 3 ? style.style : "text-white"
              } mb-[8px]`}
            >
              Estado en SAP
            </h5>
            <div
              className={`flex gap-[4px] ${
                style ? style?.styleSap : "bg-[#FFC610]"
              } h-[28px] rounded-[80px] items-center w-[120px] p-[2px] overflow-hidden`}
            >
              <img
                src={style ? style.img : clock}
                alt="icon"
                className="w-[24px] h-[24px]"
              />
              <h5
                className={`font-inter font-bold text-[10px] ${
                  style ? style?.styleSap : "text-[#202020]"
                }`}
              >
                {states?.[state]?.text}
              </h5>
            </div>
          </div>

          {lastUpdate && (
            <div className="mt-[12px]">
              <h5 className={`font-normal text-white font-inter text-[10px]`}>
                Última actualización
              </h5>
              <h5 className={`font-normal text-white font-inter text-[14px]`}>
                {lastUpdate}
              </h5>
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex  ${
          state === 3 ? "bg-[#4d4d4d33]" : "bg-[#19418E]"
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
                state === 3 ? style.bottom : "text-[#4EBFFE]"
              }`}
            >
              Transportador
            </h5>
            <p
              className={`font-inter font-bold text-[14px] ${
                state === 3 ? style.bottom : "text-white"
              }`}
            >
              {numberDriver}
            </p>
          </div>
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                state === 3 ? style.bottom : "text-[#4EBFFE]"
              }`}
            >
              Ficha camión
            </h5>
            <p
              className={`font-inter font-bold text-[14px] ${
                state === 3 ? style.bottom : "text-white"
              }`}
            >
              {truckSheet}
            </p>
          </div>
          <div>
            <h5
              className={`font-inter font-normal text-[10px] ${
                state === 3 ? style.bottom : "text-[#4EBFFE]"
              }`}
            >
              Placa
            </h5>
            <p
              className={`font-inter font-bold text-[14px] ${
                state === 3 ? style.bottom : "text-white"
              }`}
            >
              {plaque}
            </p>
          </div>
          {driver && (
            <div>
              <h5
                className={`font-inter font-normal text-[10px] ${
                  state === 3 ? style.bottom : "text-[#4EBFFE]"
                }`}
              >
                Conductor
              </h5>
              <p
                className={`font-inter font-bold text-[14px] ${
                  state === 3 ? style.bottom : "text-white"
                }`}
              >
                {driver}
              </p>
            </div>
          )}
        </div>
      </div>
      {reasonCancel && (
        <>
          <div
            className={`flex justify-between px-[16px] ${
              open ? "pt-[8px]" : "py-[8px]"
            } items-center bg-[#4D4D4D]`}
          >
            <h6 className="font-inter font-bold text-[14px]">
              Motivo de cancelación
            </h6>
            <img
              src={arrow}
              alt="arrow"
              className={`w-[32px] h-[32px] ${open && "rotate-90"}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen((prev) => !prev);
              }}
            />
          </div>
          {open && (
            <div className="px-[16px] pb-[16px] bg-[#4D4D4D]">
              <h6 className="font-inter font-normal text-[10px]">
                {reasonCancel}
              </h6>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CardCountDetail;
