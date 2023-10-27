import { useState } from "react";
import { updateStep } from "../../../Redux/Slices/Steps";
import { useDispatch } from "react-redux";

const useStepTwo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [openBayCount, setOpenBayCount] = useState(false);

  const onclickAdd = (number, name) => {
    setOpenBay(true);
    setData({ number, name });
  };

  const bays = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const skus = ["B1", "B2", "B3", "B4", "B5", "B6"];

  const handleConfirm = () => {
    dispatch(updateStep(3));
  };

  return {
    data,
    openBay,
    openBayCount,
    bays,
    onclickAdd,
    setOpenBay,
    setOpenBayCount,
    skus,
    handleConfirm,
  };
};

export default useStepTwo;
