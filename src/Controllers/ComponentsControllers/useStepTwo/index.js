import { useState } from "react";

const useStepTwo = () => {
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [openBayCount, setOpenBayCount] = useState(false);

  const onclickAdd = (number, name) => {
    setOpenBay(true);
    setData({ number, name });
  };

  const bays = ["B1", "B2", "B3", "B4", "B5", "B6"];

  return {
    data,
    openBay,
    openBayCount,
    bays,
    onclickAdd,
    setOpenBay,
    setOpenBayCount,
  };
};

export default useStepTwo;
