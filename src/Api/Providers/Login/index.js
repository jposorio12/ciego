import api from "../../../Config/Axios/index";

const Login = ({ password, email }) => {
  const response = api({
    method: "POST",
    url: "/login",
    data: { password, email },
  });
  return response;
};

export default Login;
