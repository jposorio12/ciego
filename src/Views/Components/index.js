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
  const { HeaderCount, HeaderDetail, HeaderDetailId } = useHeaders();
  const { CardCount, CardSkuCount, CardSkuSuccesful } = useCards();
  const { StepOne, StepTwo, StepThree } = useSteps();
  const { ModalBay, ModalBayCount, ModalDetailId, ModalCancelCount } =
    useModals();

  return {
    InputDefault,
    InputAddCount,
    SelectDefault,
    ButtonDefault,
    HeaderCount,
    HeaderDetail,
    HeaderDetailId,
    CardCount,
    CardSkuCount,
    CardSkuSuccesful,
    WifiIcon,
    Filter,
    StatusLine,
    StepOne,
    StepTwo,
    StepThree,
    ModalBay,
    ModalBayCount,
    ModalDetailId,
    ModalCancelCount,
  };
};

export default useComponents;
