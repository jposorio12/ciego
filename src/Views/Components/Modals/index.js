import ModalBay from "./ModalBay";
import ModalBayCount from "./ModalBayCount";
import ModalDetailId from "./ModalDetailId";
import ModalCancelCount from "./ModalCancelCount";
import ModalCreateSucces from "./ModalCreateSucces";
import ModalCreateError from "./ModalCreateError";
import ModalSearch from "./ModalSearch";

const useModals = () => {
  return {
    ModalBay,
    ModalBayCount,
    ModalDetailId,
    ModalCancelCount,
    ModalCreateSucces,
    ModalCreateError,
    ModalSearch,
  };
};

export default useModals;
