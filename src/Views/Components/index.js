import useInputs from "./Inputs";
import useButtons from "./Buttons";
import useHeaders from "./Headers";
import useCards from "./Cards";
import WifiIcon from "./WifiIcon/WifiIcon";
import Filter from "./Filter";
import StatusLine from "./StatusLine";
import useSteps from "./Steps";
import useModals from "./Modals";
import SuggestLine from "./SuggestLine";

const useComponents = () => {
  const { InputDefault, SelectDefault, InputAddCount } = useInputs();
  const { ButtonDefault } = useButtons();
  const { HeaderCount, HeaderDetail, HeaderDetailId } = useHeaders();
  const { CardCount, CardCountDetail, CardSkuCount, CardSkuSuccesful } =
    useCards();
  const { StepOne, StepTwo, StepTwoDetail, StepThree } = useSteps();
  const {
    ModalBay,
    ModalBayCount,
    ModalDetailId,
    ModalCancelCount,
    ModalCreateSucces,
    ModalCreateError,
    ModalSearch,
  } = useModals();

  return {
    InputDefault,
    InputAddCount,
    SelectDefault,
    ButtonDefault,
    HeaderCount,
    HeaderDetail,
    HeaderDetailId,
    CardCount,
    CardCountDetail,
    CardSkuCount,
    CardSkuSuccesful,
    WifiIcon,
    Filter,
    StatusLine,
    StepOne,
    StepTwo,
    StepTwoDetail,
    StepThree,
    ModalBay,
    ModalBayCount,
    ModalDetailId,
    ModalCancelCount,
    ModalCreateSucces,
    ModalCreateError,
    ModalSearch,
    SuggestLine
  };
};

export default useComponents;
