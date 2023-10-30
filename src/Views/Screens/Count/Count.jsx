import useComponents from "../../Components";
import useLayouts from "../../Layouts";
import newCount from "../../../Assets/newCount.png";
import filter from "../../../Assets/Filter.png";
import empty from "../../../Assets/countEmpty.png";
import { useNavigate } from "react-router-dom";

const Count = () => {
  const { HeaderCount, Filter, CardCount, ButtonDefault } = useComponents();
  const { PrivateLayout } = useLayouts();
  const navigate = useNavigate();
  const arr = [1];

  return (
    <PrivateLayout Header={<HeaderCount />}>
      {arr.length > 0 && (
        <>
          <h2 className="font-inter font-bold text-[14px] mt-[8px] px-[16px] mx-auto max-w-[400px] text-[#0C2047]">
            LISTADO DE CONTEOS
          </h2>
          <Filter icon={filter} activeOnFocus />
        </>
      )}
      <section
        className={`flex flex-col gap-[10px] ${
          arr.length > 0 ? "mt-[30px]" : "mt-[40px]"
        }`}
      >
        {arr.length > 0 ? (
          <CardCount
            numberRoute={500774}
            date="22/08/23"
            state={3}
            lastUpdate="22/08/23"
            numberDriver="402-13091990"
            truckSheet={2435}
            plaque="L337500"
            driver="El choquito"
            onClick={() => navigate("/detail/1")}
          />
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
        <ButtonDefault
          text="Nuevo conteo"
          icon={newCount}
          classNameButton="rounded-[32px] bg-[#19418E] flex w-[80%] max-w-[400px] mx-auto h-[64px] transform translate-x-[-50%]
          shadow-buttonCount fixed bottom-[60px] left-[50%] flex items-center justify-center gap-[16px] cursor-pointer"
          classNameSpan="font-inter font-bold text-[18px] text-white"
          onClick={() => navigate("/detail")}
        />
      </section>
    </PrivateLayout>
  );
};

export default Count;
