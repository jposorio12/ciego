import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  updateForm,
  CountDetailSelector,
} from "../../../Redux/Slices/CountDetail";
import { useDispatch, useSelector } from "react-redux";
import useUtils from "../../../Utils";

const useCountDetail = () => {
  const dispatch = useDispatch();
  const { id, counts } = useSelector(CountDetailSelector);
  const [step, setStep] = useState(1);
  const { FormatDate } = useUtils();
  const { dateInline } = FormatDate();

  const CountDetailSchema = yup.object({
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

  const CountDetailForm = useForm({
    resolver: yupResolver(CountDetailSchema),
    mode: "onChange",
  });

  const submitForm = (data, object) => {
    const { ccd, conveyor, driver, plaque, route, store, truckSheet } =
      CountDetailForm?.getValues();

    const { bay, fault, faultOption, measure, quantity } = data;
    const { name, number } = object;
    const exist = counts?.find((count) => count?.id === id);

    if (exist) {
      const count = counts?.filter((count) => count?.id === id)[0];
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

      const countsToUpdate = counts?.filter((count) => count?.id !== id);
      const finalObject = {
        form: { ccd, conveyor, driver, plaque, route, store, truckSheet },
        skus,
        status: 1,
        date: count?.date,
        lastUpdateDate: dateInline(),
        id,
      };
      dispatch(updateForm([...countsToUpdate, finalObject]));
    } else {
      const finalObject = {
        form: { ccd, conveyor, driver, plaque, route, store, truckSheet },
        skus: [{ bay, fault, faultOption, measure, quantity, name, number }],
        status: 1,
        date: dateInline(),
        lastUpdateDate: dateInline(),
        id,
      };
      dispatch(updateForm([...counts, finalObject]));
    }
  };

  return { CountDetailForm, step, setStep, submitForm };
};

export default useCountDetail;
