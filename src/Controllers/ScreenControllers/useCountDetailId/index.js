import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { updateForm } from "../../../Redux/Slices/CountDetail";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useUtils from "../../../Utils";

const useCountDetailId = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [openCancel, setOpenCancel] = useState(false);
  const { id } = useParams();
  const { counts } = useSelector(CountDetailSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { FormatDate } = useUtils();
  const { dateInline } = FormatDate();

  const CountDetailIdSchema = yup.object({
    ccd: yup.string().required("Debes seleccionar un CDD"),
    store: yup
      .number()
      .positive("Debes seleccionar un almacén")
      .required("Debes seleccionar un almacén")
      .typeError("Debes seleccionar un almacén"),
    route: yup
      .number()
      .positive("Debes ingresar un número de ruta")
      .required("Debes ingresar un número de ruta")
      .typeError("Debes ingresar un número de ruta"),
    conveyor: yup
      .number()
      .positive("Debes ingresar un número de transportador")
      .required("Debes ingresar un número de transportador")
      .typeError("Debes ingresar un número de transportador"),
    driver: yup.string().required("Debes seleccionar un conductor"),
    plaque: yup
      .string()
      .required("Debes ingresar un número de placa")
      .typeError("Debes ingresar un número de placa"),
    truckSheet: yup
      .number()
      .positive("Debes ingresar un número de ficha de camión")
      .required("Debes ingresar un número de ficha de camión")
      .typeError("Debes ingresar un número de ficha de camión"),
  });

  const otherCounts = counts?.filter((count) => count?.id !== Number(id));
  const activeCount = counts?.filter((count) => count?.id === Number(id))[0];
  const form = activeCount?.form;
  const skus = activeCount?.skus;

  const handleReasonCancel = (value) => {
    const updateData = { ...activeCount, reasonCancel: value, status: 3 };
    dispatch(updateForm([...otherCounts, updateData]));
  };

  const CountDetailIdForm = useForm({
    resolver: yupResolver(CountDetailIdSchema),
    mode: "onChange",
    defaultValues: {
      ccd: form?.ccd,
      store: form?.store,
      route: form?.route,
      conveyor: form?.conveyor,
      driver: form?.driver,
      plaque: form?.plaque,
      truckSheet: form?.truckSheet,
    },
  });

  const editSku = (number, data) => {
    const { bay, fault, faultOption, measure, quantity } = data;
    const elementToEdit = counts?.filter(
      (count) => count?.id === Number(id)
    )[0];
    const filterSkus = elementToEdit?.skus?.filter(
      (sku) => sku?.number !== number
    );
    const skuToEdit = elementToEdit?.skus?.filter(
      (sku) => sku?.number === number
    )[0];
    const updateSku = {
      ...skuToEdit,
      bay,
      fault,
      faultOption,
      measure,
      quantity,
    };
    const skus = [...filterSkus, updateSku];
    const finalElement = { ...elementToEdit, skus };
    const filterCounts = counts?.filter((count) => count?.id !== Number(id));
    dispatch(updateForm([...filterCounts, finalElement]));
  };

  const submitForm = (data, object) => {
    const { ccd, conveyor, driver, plaque, route, store, truckSheet } =
      CountDetailIdForm?.getValues();

    const { bay, fault, faultOption, measure, quantity } = data;
    const { name, number, edit } = object;
    if (edit) {
      editSku(number, data);
      return;
    }
    const exist = counts?.find((count) => count?.id === Number(id));

    if (exist) {
      const count = counts?.filter((count) => count?.id === Number(id))[0];
      const oldSkus = count?.skus?.filter((sku) => sku?.number === number);

      let skus = [];

      if (oldSkus?.length > 0) {
        const skusUpdate = count?.skus?.filter(
          (sku) => sku?.number !== number
        )[0];
        skus = [
          ...skusUpdate,
          { bay, fault, faultOption, measure, quantity, name, number },
        ];
      } else {
        skus = [
          ...count?.skus,
          { bay, fault, faultOption, measure, quantity, name, number },
        ];
      }

      const countsToUpdate = counts?.filter(
        (count) => count?.id !== Number(id)
      );
      const finalObject = {
        form: { ccd, conveyor, driver, plaque, route, store, truckSheet },
        skus,
        status: 1,
        date: activeCount?.date,
        lastUpdateDate: dateInline(),
        id,
      };
      dispatch(updateForm([...countsToUpdate, finalObject]));
    } else {
      const finalObject = {
        form: { ccd, conveyor, driver, plaque, route, store, truckSheet },
        skus: [{ bay, fault, faultOption, measure, quantity, name, number }],
        status: activeCount?.status,
        date: activeCount?.date,
        lastUpdateDate: dateInline(),
        id,
      };
      dispatch(updateForm([...counts, finalObject]));
    }
  };

  const handleStep = () => {
    setStep(1);
    setOpen(false);
  };

  const goBack = () => {
    navigate("/count");
  };

  const onClickEdit = (status) => {
    if (status !== 2 && status !== 3 && status !== 4) {
      setStep(2);
    }
  };

  const onClickDelete = (status) => {
    if (status !== 2 && status !== 3 && status !== 4) {
      setStep(2);
    }
  };

  return {
    open,
    setOpen,
    openCancel,
    setOpenCancel,
    goBack,
    form,
    skus,
    activeCount,
    handleReasonCancel,
    CountDetailIdForm,
    step,
    setStep,
    handleStep,
    id,
    submitForm,
    onClickEdit,
    onClickDelete,
  };
};

export default useCountDetailId;
