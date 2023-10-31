import { useState } from "react";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { useSelector, useDispatch } from "react-redux";
import { create } from "../../../Redux/Slices/CountDetail/thunk";
import { NetworkSelector } from "../../../Redux/Slices/Network";
import { updateForm } from "../../../Redux/Slices/CountDetail";

const useStepThree = () => {
  const { id, counts } = useSelector(CountDetailSelector);
  const { isOnline } = useSelector(NetworkSelector);
  const dispatch = useDispatch();
  const [openSucces, setOpenSucces] = useState(false);
  const [openError, setOpenError] = useState(false);

  const otherCounts = counts?.filter((count) => count?.id !== id);
  const activeCount = counts?.filter((count) => count?.id === id)[0];
  const form = activeCount?.form;
  const skus = activeCount?.skus;

  const handleCreate = () => {
    if (isOnline) {
      dispatch(create({}));
      setOpenError(true);
    } else {
      const updateStatus = { ...activeCount, status: 4 };
      dispatch(updateForm([...otherCounts, updateStatus]));
      setOpenSucces(true);
    }
  };

  return { activeCount, form, skus, handleCreate, openSucces, openError };
};

export default useStepThree;
