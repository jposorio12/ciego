import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginSelector } from "../../Redux/Slices/Login";

const PrivateRoute = () => {
  const loginData = useSelector(LoginSelector);

  return loginData?.token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
