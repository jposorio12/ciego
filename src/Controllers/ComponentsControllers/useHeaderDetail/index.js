import { useNavigate } from "react-router-dom";

const useHeaderDetail = (step, setStep) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    if (step - 1 === 0) {
      navigate("/count");
    } else {
      setStep((prev) => prev - 1);
    }
  };

  return { handleClickBack };
};

export default useHeaderDetail;
