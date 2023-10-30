import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { useSelector } from "react-redux";

const useStepThree = () => {
  const { id, counts } = useSelector(CountDetailSelector);
  const activeCount = counts?.filter((count) => count?.id === id)[0];
  const form = activeCount?.form;
  const skus = activeCount?.skus;

  return { activeCount, form, skus };
};

export default useStepThree;
