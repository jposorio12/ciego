import useUtils from "../../../Utils";

const useStepOne = (setStep) => {
  const { FormatDate } = useUtils();
  const { getDate } = FormatDate();

  const submitForm = () => {
    setStep((prev) => prev + 1);
  };

  const date = getDate();

  return { submitForm, date };
};
export default useStepOne;
