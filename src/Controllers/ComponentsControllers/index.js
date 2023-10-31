import useHeaderCount from "./useHeaderCount";
import useFilterCount from "./useFilterCount";
import useHeaderDetail from "./useHeaderDetail";
import useStatusLine from "./useStatusLine";
import useStepOne from "./useStepOne";
import useStepTwo from "./useStepTwo";
import useStepTwoDetail from "./useStepTwoDetail";
import useStepThree from "./useStepThree";
import useCardCount from "./useCardCount";
import useCardCountDetail from "./useCardCountDetail";

const useComponentsControllers = () => {
  return {
    useHeaderCount,
    useFilterCount,
    useHeaderDetail,
    useStatusLine,
    useStepOne,
    useStepTwo,
    useStepTwoDetail,
    useStepThree,
    useCardCount,
    useCardCountDetail,
  };
};

export default useComponentsControllers;
