import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StepSelector } from "../../../Redux/Slices/Steps";
import { useSelector } from "react-redux";

const useCountDetail = () => {
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

  const { step } = useSelector(StepSelector);

  return { CountDetailForm, step };
};

export default useCountDetail;
