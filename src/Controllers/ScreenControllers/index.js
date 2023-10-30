import useLogin from "./useLogin";
import useSearch from "./useSearch";
import useCountDetail from "./useCountDetail";
import useCountDetailId from "./useCountDetailId";
import useCount from "./useCount";

const useScreenControllers = () => {
  return { useLogin, useSearch, useCountDetail, useCountDetailId, useCount };
};

export default useScreenControllers;
