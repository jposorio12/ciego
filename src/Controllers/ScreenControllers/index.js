import useLogin from "./useLogin";
import useCountDetail from "./useCountDetail";
import useCountDetailId from "./useCountDetailId";
import useCount from "./useCount";

const useScreenControllers = () => {
  return { useLogin, useCountDetail, useCountDetailId, useCount };
};

export default useScreenControllers;
