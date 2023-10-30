import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { useSelector, useDispatch } from "react-redux";
import { create } from "../../../Redux/Slices/CountDetail/thunk";

const useStepThree = () => {
  const { id, counts } = useSelector(CountDetailSelector);
  const dispatch = useDispatch();

  const activeCount = counts?.filter((count) => count?.id === id)[0];
  const form = activeCount?.form;
  const skus = activeCount?.skus;

  const handleCreate = () => {
    dispatch(create({}));
  };

  return { activeCount, form, skus, handleCreate };
};

export default useStepThree;
