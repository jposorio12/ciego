import useLayouts from "../../Layouts";
import useComponents from "../../Components";
import add from "../../../Assets/AddCircle.png";
import useScreenControllers from "../../../Controllers/ScreenControllers";

const CountDetailId = () => {
  const { PrivateLayout } = useLayouts();
  const {
    HeaderDetailId,
    CardSkuSuccesful,
    ButtonDefault,
    ModalDetailId,
    ModalCancelCount,
    CardCountDetail,
    StepOne,
    StepTwoDetail,
    StepThree,
    StatusLine,
  } = useComponents();
  const { useCountDetailId } = useScreenControllers();
  const {
    open,
    setOpen,
    openCancel,
    setOpenCancel,
    goBack,
    form,
    skus,
    activeCount,
    handleReasonCancel,
    step,
    setStep,
    handleStep,
    CountDetailIdForm,
    id,
    submitForm,
    onClickEdit,
    onClickDelete,
  } = useCountDetailId();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = CountDetailIdForm;

  return (
    <PrivateLayout
      Header={
        <HeaderDetailId goBack={goBack} stateCard={activeCount?.status} />
      }
    >
      {step > 0 && <StatusLine step={step} quantitySteps={2} isDetail />}
      {step === 0 && (
        <>
          <CardCountDetail
            numberRoute={form?.route}
            date={activeCount?.date}
            state={activeCount?.status}
            lastUpdate={activeCount?.lastUpdateDate}
            numberDriver={form?.conveyor}
            truckSheet={form?.truckSheet}
            plaque={form?.plaque}
            driver={form?.driver}
            reasonCancel={activeCount?.reasonCancel}
          />

          <h2 className="font-inter font-bold text-[14px] text-[#0C2047] max-w-[400px] px-[16px] my-[10px] mx-auto">
            Transacciones / SKUs
          </h2>

          {skus?.map((sku) => (
            <CardSkuSuccesful
              key={sku?.number}
              classNameContainer={
                activeCount?.status === 3 ? "!bg-[#E8E8E8]" : "!bg-white"
              }
              number={sku?.number}
              name={sku?.name}
              bay={sku?.bay}
              quantity={sku?.quantity}
              fault={sku?.fault}
              total={sku?.total}
              measure={sku?.measure}
              state={activeCount?.status}
              onClickEdit={() => onClickEdit(activeCount?.status)}
              onClickDelete={() => onClickDelete(activeCount?.status)}
            />
          ))}

          {open && (
            <ModalDetailId
              setOpen={setOpen}
              setOpenCancel={setOpenCancel}
              handleStep={handleStep}
              state={activeCount?.status}
            />
          )}

          {openCancel && (
            <ModalCancelCount
              setOpen={setOpen}
              setOpenCancel={setOpenCancel}
              handleReasonCancel={handleReasonCancel}
            />
          )}

          {activeCount?.status !== 2 && activeCount?.status !== 3 && (
            <ButtonDefault
              icon={add}
              classNameIcon="h-[32px] w-[32px]"
              classNameButton="rounded-full bg-[#19418E] fixed bottom-[30px] right-[24px] h-[64px] w-[64px] flex justify-center items-center cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </>
      )}
      {step === 1 && (
        <StepOne
          form={{ handleSubmit, control, errors, isValid }}
          steps={{ setStep }}
          isDetail
          id={id}
        />
      )}
      {step === 2 && (
        <StepTwoDetail steps={{ setStep }} submitForm={submitForm} />
      )}
      {step === 3 && <StepThree setStep={setStep} />}
    </PrivateLayout>
  );
};

export default CountDetailId;
