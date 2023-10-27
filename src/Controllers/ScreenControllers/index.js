import useLogin from "./useLogin";
import useSearch from "./useSearch";
import useCountDetail from "./useCountDetail";
import useCountDetailId from "./useCountDetailId";

const useScreenControllers = () => {
  return { useLogin, useSearch, useCountDetail, useCountDetailId };
};

export default useScreenControllers;
