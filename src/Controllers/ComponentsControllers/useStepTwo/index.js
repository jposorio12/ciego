import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { updateStep } from "../../../Redux/Slices/Steps";
import { useDispatch } from "react-redux";

const useStepTwo = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [openBayCount, setOpenBayCount] = useState(false);

  const StepTwoSchema = yup.object({
    bay: yup.string().required("Debes seleccionar una bahía"),
    quantity: yup.number().positive().required(),
    fault: yup.number().positive(),
    faultOption: yup.string().when("fault", {
      is: (value) => value > 0,
      then: yup.string().required(),
      otherwise: yup.string().notRequired(),
    }),
    measure: yup.string().required(),
  });

  const StepTwoForm = useForm({
    resolver: yupResolver(StepTwoSchema),
    mode: "onChange",
  });

  const onclickAdd = (number, name) => {
    setOpenBay(true);
    setData({ number, name });
  };

  const skus = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const bays = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const skusSelected = [];

  const handleConfirm = () => {
    dispatch(updateStep(3));
  };

  return {
    data,
    openBay,
    openBayCount,
    onclickAdd,
    setOpenBay,
    setOpenBayCount,
    skus,
    bays,
    skusSelected,
    handleConfirm,
    StepTwoForm,
  };
};

export default useStepTwo;
