import {
  CountDetailSelector,
  updateForm,
} from "../../../Redux/Slices/CountDetail";
import { useSelector, useDispatch } from "react-redux";
import useUtils from "../../../Utils";

const useStepOne = (setStep) => {
  const { FormatDate } = useUtils();
  const { id, counts } = useSelector(CountDetailSelector);
  const { getDate } = FormatDate();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    const activeCount = counts?.filter((count) => count?.id === id)[0];
    const thereAreSkus = activeCount?.skus?.length > 0;

    if (thereAreSkus) {
      const updateData = counts?.filter((count) => count?.id !== id);
      const newData = [...updateData, { ...activeCount, form: { ...data } }];
      dispatch(updateForm(newData));
      setStep((prev) => prev + 1);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const submitFormDetail = (data, id) => {
    const activeCount = counts?.filter((count) => count?.id === Number(id))[0];
    const thereAreSkus = activeCount?.skus?.length > 0;

    if (thereAreSkus) {
      const updateData = counts?.filter((count) => count?.id !== Number(id));
      const newData = [...updateData, { ...activeCount, form: { ...data } }];
      dispatch(updateForm(newData));
      setStep((prev) => prev + 1);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const date = getDate();

  return { submitForm, date, submitFormDetail };
};
export default useStepOne;
