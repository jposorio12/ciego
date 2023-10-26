import useLayouts from "../../Layouts";
import error from "../../../Assets/errorNetworkLogin.png";
import arrow from "../../../Assets/ArrowLeft.png";
import useComponents from "../../Components";
import { useNavigate } from "react-router-dom";

const Offline = () => {
  const { PublicLayout } = useLayouts();
  const { ButtonDefault } = useComponents();
  const navigate = useNavigate();

  return (
    <PublicLayout iconGoBack={arrow}>
      <img src={error} alt="icon" className="mx-auto pt-[166px]" />
      <h1 className="mx-auto text-center text-white my-[16px] w-[80%] max-w-[350px] font-inter font-extrabold text-[24px]">
        Para ingresar debes estar conectado a internet
      </h1>
      <h2 className="mx-auto text-center text-white w-[80%] max-w-[350px] mb-[125px] font-inter font-normal text-[18px]">
        Conéctate a una red de internet e inténtalo nuevamente
      </h2>
      <ButtonDefault
        text="Reintentar"
        iconLeft={arrow}
        classNameButton="mx-auto w-[80%] max-w-[400px] border-[2px] border-solid border-white cursor-pointer 
        rounded-[32px] flex items-center justify-center h-[64px] text-white gap-[10px] mb-[20px]"
        onClick={() => navigate(-1)}
        classNameSpan="font-inter font-bold text-[18px] text-white"
      />
    </PublicLayout>
  );
};

export default Offline;
