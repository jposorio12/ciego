import { StepSelector } from "../../../Redux/Slices/Steps";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStep } from "../../../Redux/Slices/Steps";

const useHeaderDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { step } = useSelector(StepSelector);

  const handleClickBack = () => {
    if (step - 1 === 0) {
      navigate("/count");
    } else {
      dispatch(updateStep(step - 1));
    }
  };

  return { step, handleClickBack };
};

export default useHeaderDetail;
