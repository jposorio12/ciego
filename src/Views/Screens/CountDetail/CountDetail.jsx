import useLayouts from "../../Layouts";
import useComponents from "../../Components";
import useScreenControllers from "../../../Controllers/ScreenControllers";

const CountDetail = () => {
  const { PrivateLayout } = useLayouts();
  const { HeaderDetail, StatusLine, StepOne, StepTwo, StepThree } =
    useComponents();

  const { useCountDetail } = useScreenControllers();
  const { CountDetailForm, step } = useCountDetail();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = CountDetailForm;

  return (
    <PrivateLayout Header={<HeaderDetail />} className="bg-white">
      <StatusLine />
      {step === 1 && (
        <StepOne form={{ handleSubmit, control, errors, isValid }} />
      )}
      {step === 2 && (
        <StepTwo form={{ handleSubmit, control, errors, isValid }} />
      )}
      {step === 3 && <StepThree />}
    </PrivateLayout>
  );
};

export default CountDetail;
