import useLayouts from "../../Layouts";
import useComponents from "../../Components";
import useScreenControllers from "../../../Controllers/ScreenControllers";
import useWrappers from "../../../Wrappers";
const CountDetail = () => {
  const { PrivateLayout } = useLayouts();
  const { HeaderDetail, StatusLine, StepOne, StepTwo, StepThree } =
    useComponents();

  const { ScrollTop } = useWrappers();

  const { useCountDetail } = useScreenControllers();
  const { CountDetailForm, step, setStep, submitForm } = useCountDetail();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = CountDetailForm;

  return (
    <PrivateLayout
      Header={<HeaderDetail steps={{ step, setStep }} route="/count" />}
      className="bg-white"
    >
      <StatusLine step={step} />
      <ScrollTop change={step}>
        {step === 1 && (
          <StepOne
            form={{ handleSubmit, control, errors, isValid }}
            steps={{ setStep }}
          />
        )}
        {step === 2 && (
          <StepTwo steps={{ step, setStep }} submitForm={submitForm} />
        )}
        {step === 3 && <StepThree setStep={setStep} />}
      </ScrollTop>
    </PrivateLayout>
  );
};

export default CountDetail;
