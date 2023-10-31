import useComponents from "../../Components";
import useLayouts from "../../Layouts";
import newCount from "../../../Assets/newCount.png";
import filter from "../../../Assets/Filter.png";
import empty from "../../../Assets/countEmpty.png";
import add from "../../../Assets/AddWhite.png";
import useScreenControllers from "../../../Controllers/ScreenControllers";

const Count = () => {
  const { HeaderCount, Filter, CardCount, ButtonDefault } = useComponents();
  const { PrivateLayout } = useLayouts();
  const { useCount } = useScreenControllers();
  const { navigate, arrayCounts, onClick } = useCount();

  return (
    <PrivateLayout Header={<HeaderCount />}>
      {arrayCounts?.length > 0 && (
        <>
          <h2 className="font-inter font-bold text-[14px] mt-[8px] px-[16px] mx-auto max-w-[400px] text-[#0C2047]">
            LISTADO DE CONTEOS
          </h2>
          <Filter icon={filter} activeOnFocus />
        </>
      )}
      <section
        className={`flex flex-col gap-[20px] ${
          arrayCounts?.length > 0 ? "mt-[30px]" : "mt-[40px]"
        }`}
      >
        {arrayCounts?.length > 0 ? (
          <>
            {arrayCounts?.map((count) => (
              <CardCount
                key={count?.id}
                numberRoute={count?.form?.route}
                date={count?.date}
                state={count?.status}
                lastUpdate={count?.lastUpdateDate}
                numberDriver={count?.form?.conveyor}
                truckSheet={count?.form?.truckSheet}
                plaque={count?.form?.plaque}
                driver={count?.form?.driver}
                onClick={() => navigate(`/detail/${count?.id}`)}
              />
            ))}
          </>
        ) : (
          <div className="w-[80%] max-w-[400px] mx-auto">
            <h3 className="font-inter font-bold text-[32px] text-[#0C2047] text-center leading-[38px] max-w-[370px] mb-[23px]">
              No hay conteos creados aún.
            </h3>
            <img
              src={empty}
              alt="icon"
              className="w-[247px] h-[240px] mx-auto"
            />
            <h4 className="font-inter font-normal text-center text-[18px] text-[#0C2047] max-w-[200px] mx-auto leading-[25px]">
              Empieza creando un nuevo conteo
            </h4>
          </div>
        )}
        <div className="mb-[80px]" />
        <ButtonDefault
          text="Nuevo conteo"
          icon={arrayCounts?.length > 0 ? newCount : add}
          classNameButton="rounded-[32px] bg-[#19418E] flex w-[80%] max-w-[400px] mx-auto h-[64px]
          shadow-buttonCount sticky bottom-[60px] flex items-center justify-center gap-[16px] cursor-pointer"
          classNameSpan="font-inter font-bold text-[18px] text-white"
          onClick={onClick}
        />
      </section>
    </PrivateLayout>
  );
};

export default Count;
