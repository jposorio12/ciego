import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  updatePassword,
  updateEmail,
  LoginSelector,
} from "../../../Redux/Slices/Login";
import { NetworkSelector } from "../../../Redux/Slices/Network";
import { Validate } from "../../../Redux/Slices/Login/thunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { password, email } = useSelector(LoginSelector);
  const { isOnline } = useSelector(NetworkSelector);

  const loginSchema = yup.object({
    email: yup.string().required("Campo requerido"),
    password: yup.string().required("Campo requerido"),
  });

  const loginForm = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const handleError = () => {
    const { setError } = loginForm;
    setError("email", {
      type: "error",
      message: "Debes ingresar un usuario válido",
    });
    setError("password", {
      type: "error",
      message: "Debes ingresar una contraseña válida",
    });
  };

  const submitForm = ({ email, password }) => {
    // handleSucces,handleError
    if (isOnline) {
      dispatch(Validate({ email, password, handleError }));
    } else {
      navigate("/offline");
      updateValueEmail("");
      updateValuePassword("");
    }
  };

  const updateValueEmail = (value) => {
    dispatch(updateEmail(value));
  };
  const updateValuePassword = (value) => {
    dispatch(updatePassword(value));
  };

  return {
    loginForm,
    passwordValue: password,
    emailValue: email,
    submitForm,
    updateValueEmail,
    updateValuePassword,
  };
};

export default useLogin;
