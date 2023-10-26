import useInputs from "./Inputs";
import useButtons from "./Buttons";
import useHeaders from "./Headers";
import useCards from "./Cards";
import WifiIcon from "./WifiIcon/WifiIcon";
import Filter from "./Filter";
import StatusLine from "./StatusLine";
import useSteps from "./Steps";
import useModals from "./Modals";

const useComponents = () => {
  const { InputDefault, SelectDefault, InputAddCount } = useInputs();
  const { ButtonDefault } = useButtons();
  const { HeaderCount, HeaderDetail } = useHeaders();
  const { CardCount, CardSkuCount } = useCards();
  const { StepOne, StepTwo } = useSteps();
  const { ModalBay, ModalBayCount } = useModals();

  return {
    InputDefault,
    InputAddCount,
    SelectDefault,
    ButtonDefault,
    HeaderCount,
    HeaderDetail,
    CardCount,
    CardSkuCount,
    WifiIcon,
    Filter,
    StatusLine,
    StepOne,
    StepTwo,
    ModalBay,
    ModalBayCount,
  };
};

export default useComponents;
