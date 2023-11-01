import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { updateForm } from "../../../Redux/Slices/CountDetail";
import {
  updateFilterSkus,
  FilterSelector,
} from "../../../Redux/Slices/Filters";
import useUtils from "../../../Utils";

const useStepTwo = () => {
  const [data, setData] = useState({});
  const [openBay, setOpenBay] = useState(false);
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [skus, setSkus] = useState(["12", "11", "10", "9"]);
  const [match, setMatch] = useState([]);
  const [openBayCount, setOpenBayCount] = useState(false);
  const { id, counts } = useSelector(CountDetailSelector);
  const { filterSkus } = useSelector(FilterSelector);
  const dispatch = useDispatch();
  const { FormatDate } = useUtils();
  const { dateInline } = FormatDate();

  const StepTwoSchema = yup.object({
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

  const StepTwoForm = useForm({
    resolver: yupResolver(StepTwoSchema),
    mode: "onChange",
  });

  const resetData = () => {
    const reset = StepTwoForm.resetField;
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
  const countActive = counts?.filter((count) => count?.id === id);
  const skusSelected = countActive[0]?.skus;

  const onClickEdit = (name, number) => {
    setData({ number, name, edit: true });
    setOpenBay(true);
    resetData();
  };

  const onClickDelete = (number) => {
    resetData();
    const elements = counts?.filter((count) => count?.id !== id);
    const deleteSku = countActive?.[0]?.skus?.filter(
      (sku) => sku?.number !== number
    );
    const newElement = { ...countActive[0], skus: deleteSku };

    dispatch(updateForm([...elements, newElement]));
  };

  const handleChangeFilter = ({ target: { value } }) => {
    const filterSkus = skus?.filter((sku) =>
      sku.toString()?.includes(value.toString())
    );
    if (value === "") {
      setMatch([]);
    } else {
      setMatch(filterSkus);
    }
  };

  const handleUpdateSuggestions = (valueItem) => {
    const filter = filterSkus?.filter(({ value }) => value !== valueItem);
    const object = { value: valueItem, date: dateInline() };
    dispatch(updateFilterSkus([...filter, object]));
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
    openModalSearch,
    setOpenModalSearch,
    handleUpdateSuggestions,
    filterSkus,
    match,
  };
};

export default useStepTwo;
