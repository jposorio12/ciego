import useLogin from "./useLogin";
import useSearch from "./useSearch";
import useCountDetail from "./useCountDetail";

const useScreenControllers = () => {
  return { useLogin, useSearch, useCountDetail };
};

export default useScreenControllers;
