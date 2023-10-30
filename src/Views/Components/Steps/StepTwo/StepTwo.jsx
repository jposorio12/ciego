import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import useComponents from "../..";
import arrow from "../../../../Assets/ArrowRightWhite.png";
import filter from "../../../../Assets/Filter.png";

const StepTwo = () => {
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
    handleConfirm,
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
      {skusSelected?.map((el, i) => (
        <div key={el} className="w-full max-w-[400px] mx-auto">
          <h3
            className={`font-inter font-bold text-[10px] text-[#016399] mb-[5px] mt-[12px] px-[16px] ${
              i !== 0 && "hidden"
            }`}
          >
            SKUs Agregados
          </h3>
          <CardSkuSuccesful
            number="-B00060"
            name="Modelo especial BT 6 Pack 24/355 ml R"
            bay={1}
            quantity={1}
            fault="daño"
            total={10}
            measure={2}
          />
        </div>
      ))}
      {skus?.map((el, i) => (
        <CardSkuCount
          key={el}
          index={i}
          number="-B00060"
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
          formTwo={{ handleSubmit, control, errors, isValid, setValue }}
        />
      )}
      {skusSelected?.length > 0 && (
        <ButtonDefault
          text="Confirmar consolidado"
          classNameButton={`rounded-[32px] h-[64px] w-[87%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-[#19418E] shadow-buttonCount fixed bottom-[40px] left-[50%] transform translate-x-[-50%]`}
          classNameSpan={`font-inter font-bold text-[18px] text-white`}
          icon={arrow}
          onClick={handleConfirm}
        />
      )}
    </section>
  );
};

export default StepTwo;
