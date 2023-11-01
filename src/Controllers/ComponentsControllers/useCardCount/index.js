import cancel from "../../../Assets/cancelCircle.png";
import clock from "../../../Assets/Clock.png";
import arrow from "../../../Assets/arrowWhiteUp.png";
import truckDisabled from "../../../Assets/TruckDisabled.png";
import truck from "../../../Assets/Truck.png";
import CheckCircleBlack from "../../../Assets/CheckCircleBlack.png";

const useCardCount = () => {
  const states = {
    1: {
      text: "En progreso",
      style: "bg-white text-[#19418E]",
      styleSap: "bg-[#FFC610] text-[#202020]",
      imgBottom: truck,
      img: clock,
    },
    2: {
      text: "Cargado en SAP",
      style: "bg-white text-[#19418E]",
      styleSap: "bg-[#18DC5B] text-[#202020]",
      imgBottom: truck,
      img: CheckCircleBlack,
    },
    3: {
      text: "Cancelado",
      style: "bg-[#e8e8e8] text-[#797979]",
      styleSap: "bg-[#FF1130] text-white",
      bottom: "bg-[#c7c7c7] text-[#797979]",
      imgBottom: truckDisabled,
      img: cancel,
    },
    4: {
      text: "Por enviar",
      style: "bg-white text-[#19418E]",
      styleSap: "bg-[#016399] text-white",
      imgBottom: truck,
      img: arrow,
    },
  };
  return { states };
};

export default useCardCount;
