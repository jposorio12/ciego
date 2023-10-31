import cancel from "../../../Assets/cancelCircle.png";
import clock from "../../../Assets/Clock.png";
import truckDisabled from "../../../Assets/TruckWhite.png";
import truck from "../../../Assets/TruckCeleste.png";
import CheckCircleBlack from "../../../Assets/CheckCircleBlack.png";
import { useState } from "react";

const useCardCountDetail = () => {
  const states = {
    1: {
      text: "En progreso",
      style: "bg-[#0C2047] text-white",
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
      style: "bg-[#797979] text-white",
      styleSap: "bg-[#FF1130] text-white",
      bottom: "text-white",
      imgBottom: truckDisabled,
      img: cancel,
    },
  };

  const [open, setOpen] = useState(false);

  return { states, open, setOpen };
};

export default useCardCountDetail;
