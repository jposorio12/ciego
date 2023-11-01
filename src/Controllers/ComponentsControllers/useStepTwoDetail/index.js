import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { updateForm } from "../../../Redux/Slices/CountDetail";
import { useParams } from "react-router-dom";

const useStepTwoDetail = () => {
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [openSucces, setOpenSucces] = useState(false);
  const [numberDelete, setNumberDelete] = useState();
  const [openDeleteSku, setOpenDeleteSku] = useState(false);
  const [skus, setSkus] = useState(["12", "11", "10", "9"]);
  const [openBayCount, setOpenBayCount] = useState(false);
  const { counts } = useSelector(CountDetailSelector);
  const { id } = useParams();
  const dispatch = useDispatch();

  const StepTwoDetailSchema = yup.object({
    bay: yup.string().required("Debes seleccionar una bahía"),
    quantity: yup.number().positive(),
    fault: yup.number().positive(),
    faultOption: yup.string().when("fault", {
      is: (value) => value && value > 0,
      then: yup.string().required(),
      otherwise: yup.string().notRequired(),
    }),
    measure: yup.string().when("quantity", {
      is: (value) => value && value > 0,
      then: yup.string().required(),
      otherwise: yup.string().notRequired(),
    }),
  });

  const StepTwoDetailForm = useForm({
    resolver: yupResolver(StepTwoDetailSchema),
    mode: "onChange",
  });

  const resetData = () => {
    const reset = StepTwoDetailForm.resetField;
    reset("quantity");
    reset("faultOption");
    reset("fault");
    reset("measure");
  };

  const onclickAdd = (number, name) => {
    setOpenBay(true);
    setData({ number, name, edit: false });
    resetData();
  };

  const bays = ["B1", "B2", "B3", "B4", "B5", "B6"];
  const countActive = counts?.filter((count) => count?.id === Number(id));
  const skusSelected = countActive[0]?.skus;

  const onClickEdit = (name, number) => {
    setData({ number, name, edit: true });
    setOpenBay(true);
    resetData();
  };

  const onClickRemoveSku = () => {
    resetData();
    const elements = counts?.filter((count) => count?.id !== Number(id));
    const deleteSku = countActive?.[0]?.skus?.filter(
      (sku) => sku?.number !== numberDelete
    );
    const newElement = { ...countActive[0], skus: deleteSku };

    dispatch(updateForm([...elements, newElement]));
  };

  const onClickDelete = (number) => {
    setNumberDelete(number);
    setOpenDeleteSku(true);
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
    StepTwoDetailForm,
    onClickEdit,
    onClickDelete,
    openModalSearch,
    setOpenModalSearch,
    openSucces,
    openDeleteSku,
    setOpenSucces,
    onClickRemoveSku,
    setOpenDeleteSku,
  };
};

export default useStepTwoDetail;
