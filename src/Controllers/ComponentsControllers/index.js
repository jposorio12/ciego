import useHeaderCount from "./useHeaderCount";
import useFilterCount from "./useFilterCount";
import useHeaderDetail from "./useHeaderDetail";
import useStatusLine from "./useStatusLine";
import useStepOne from "./useStepOne";
import useStepTwo from "./useStepTwo";
import useCardCount from "./useCardCount";

const useComponentsControllers = () => {
  return {
    useHeaderCount,
    useFilterCount,
    useHeaderDetail,
    useStatusLine,
    useStepOne,
    useStepTwo,
    useCardCount,
  };
};

export default useComponentsControllers;
