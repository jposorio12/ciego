import api from "../Axios";

const useInterceptors = (store) => {
  const requestSucces = (request) => {
    const { Login } = store.getState();
    request.headers.authorization = `Bearer ${Login.token}`;
    request.headers["content-type"] = "application/json";
    request.headers["accept"] = "application/json";
    return request;
  };

  const requestError = (error) => {
    console.log("error", error);
  };

  api.interceptors.request.use(requestSucces, requestError);
};
export default useInterceptors;
