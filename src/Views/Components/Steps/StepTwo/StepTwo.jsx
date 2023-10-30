import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import useComponents from "../..";
import arrow from "../../../../Assets/ArrowRightWhite.png";
import filter from "../../../../Assets/Filter.png";

const StepTwo = ({ steps, submitForm }) => {
  const { setStep } = steps;

  const {
    CardSkuCount,
    CardSkuSuccesful,
    ModalBay,
    ModalBayCount,
    ButtonDefault,
    Filter,
  } = useComponents();
  const { useStepTwo } = useComponentsControllers();
  const {
    data,
    openBay,
    onclickAdd,
    setOpenBay,
    openBayCount,
    setOpenBayCount,
    skus,
    bays,
    skusSelected,
    StepTwoForm,
  } = useStepTwo();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = StepTwoForm;

  return (
    <section className="relative">
      <h2 className="font-inter font-bold text-[20px] text-[#3D73DD] px-[16px] my-[16px] max-w-[400px] mx-auto">
        Agregar SKU al conteo
      </h2>
      <Filter icon={filter} />
      {skusSelected?.map(
        ({ name, number, measure, quantity, bay, faultOption, fault }, i) => (
          <div key={number} className="w-full max-w-[400px] mx-auto">
            <h3
              className={`font-inter font-bold text-[10px] text-[#016399] mb-[5px] mt-[12px] px-[16px] ${
                i !== 0 && "hidden"
              }`}
            >
              SKUs Agregados
            </h3>
            <CardSkuSuccesful
              number={number}
              name={name}
              bay={bay}
              quantity={quantity}
              fault={faultOption}
              total={fault}
              measure={measure}
            />
          </div>
        )
      )}
      {skus?.map((el, i) => (
        <CardSkuCount
          key={el}
          index={i}
          number={Math.random()}
          name="Modelo especial BT 6 Pack 24/355 ml RD"
          measure="PCE"
          onClick={onclickAdd}
        />
      ))}
      {openBay && (
        <ModalBay
          number={data?.number}
          name={data?.name}
          bays={bays}
          setOpenBay={setOpenBay}
          setOpenBayCount={setOpenBayCount}
          setValue={setValue}
        />
      )}
      {openBayCount && (
        <ModalBayCount
          number={data?.number}
          name={data?.name}
          setOpenBay={setOpenBay}
          setOpenBayCount={setOpenBayCount}
          setStep={setStep}
          formTwo={{
            handleSubmit,
            control,
            errors,
            isValid,
            setValue,
            submitForm,
          }}
        />
      )}
      {skusSelected?.length > 0 && (
        <ButtonDefault
          text="Confirmar consolidado"
          classNameButton={`rounded-[32px] h-[64px] w-[87%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-[#19418E] shadow-buttonCount sticky bottom-[40px]`}
          classNameSpan={`font-inter font-bold text-[18px] text-white`}
          icon={arrow}
          onClick={() => setStep(3)}
        />
      )}
    </section>
  );
};

export default StepTwo;
