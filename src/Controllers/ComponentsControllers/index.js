import useHeaderCount from "./useHeaderCount";
import useFilterCount from "./useFilterCount";
import useHeaderDetail from "./useHeaderDetail";
import useStatusLine from "./useStatusLine";
import useStepOne from "./useStepOne";
import useStepTwo from "./useStepTwo";
import useStepThree from "./useStepThree";
import useCardCount from "./useCardCount";

const useComponentsControllers = () => {
  return {
    useHeaderCount,
    useFilterCount,
    useHeaderDetail,
    useStatusLine,
    useStepOne,
    useStepTwo,
    useStepThree,
    useCardCount,
  };
};

export default useComponentsControllers;
