import { useDispatch } from "react-redux";
import { updateStep, StepSelector } from "../../../Redux/Slices/Steps";
import { useSelector } from "react-redux";
import { updateForm, updateId } from "../../../Redux/Slices/CountDetail";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";

const useStepOne = () => {
  const dispatch = useDispatch();
  const { step } = useSelector(StepSelector);
  const { id } = useSelector(CountDetailSelector);

  const submitForm = (data) => {
    dispatch(updateStep(step + 1));
    dispatch(updateId(id + 1));
    dispatch(updateForm({ ...data, id: id + 1, status: 1 }));
  };

  return { submitForm };
};
export default useStepOne;
