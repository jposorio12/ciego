import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { updateForm } from "../../../Redux/Slices/CountDetail";

const useStepTwo = () => {
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [skus, setSkus] = useState(["12", "11", "10", "9"]);
  const [openBayCount, setOpenBayCount] = useState(false);
  const { id, counts } = useSelector(CountDetailSelector);
  const dispatch = useDispatch();

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
    setData({ number, name, edit: false });
    const reset = StepTwoForm.resetField;
    reset("quantity");
    reset("faultOption");
    reset("fault");
    reset("measure");
  };

  const bays = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const countActive = counts?.filter((count) => count?.id === id);
  const skusSelected = countActive[0]?.skus;

  const onClickEdit = (name, number) => {
    setData({ number, name, edit: true });
    setOpenBay(true);
  };

  const onClickDelete = (number) => {
    const elements = counts?.filter((count) => count?.id !== id);
    const deleteSku = countActive?.[0]?.skus?.filter(
      (sku) => sku?.number !== number
    );
    const newElement = { ...countActive[0], skus: deleteSku };

    dispatch(updateForm([...elements, newElement]));
  };

  const handleChangeFilter = ({ target }) => {
    if (target.value?.length !== 0) {
      const match = skus?.filter((sku) =>
        sku.toString().includes(target.value.toString())
      );
      setSkus(match);
    } else {
      setSkus(["12", "11", "10", "9"]);
    }
  };

  return {
    data,
    openBay,
    openBayCount,
    onclickAdd,
    setOpenBay,
    setOpenBayCount,
    skus,
    handleChangeFilter,
    bays,
    skusSelected,
    StepTwoForm,
    onClickEdit,
    onClickDelete,
  };
};

export default useStepTwo;
