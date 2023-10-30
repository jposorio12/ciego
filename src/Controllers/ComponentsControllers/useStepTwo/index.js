import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSelector } from "react-redux";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";

const useStepTwo = () => {
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [openBayCount, setOpenBayCount] = useState(false);
  const { id, counts } = useSelector(CountDetailSelector);

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
    const reset = StepTwoForm.resetField;
    reset("quantity");
    reset("faultOption");
    reset("fault");
    reset("measure");
  };

  const skus = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const bays = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const countActive = counts?.filter((count) => count?.id === id);
  const skusSelected = countActive[0]?.skus;

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
    StepTwoForm,
  };
};

export default useStepTwo;
