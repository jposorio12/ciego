import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import useComponents from "../..";
import arrow from "../../../../Assets/ArrowRightWhite.png";

const StepTwo = () => {
  const {
    CardSkuCount,
    CardSkuSuccesful,
    ModalBay,
    ModalBayCount,
    ButtonDefault,
  } = useComponents();
  const { useStepTwo } = useComponentsControllers();
  const {
    data,
    bays,
    openBay,
    onclickAdd,
    setOpenBay,
    openBayCount,
    setOpenBayCount,
    skus,
    handleConfirm,
  } = useStepTwo();

  return (
    <section className="relative">
      {skus?.map((el, i) => (
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
      {bays?.map((el, i) => (
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
        />
      )}
      {openBayCount && (
        <ModalBayCount number={data?.number} name={data?.name} />
      )}
      <ButtonDefault
        text="Confirmar consolidado"
        classNameButton={`rounded-[32px] h-[64px] w-[87%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-[#19418E] shadow-buttonCount fixed bottom-[40px] left-[50%] transform translate-x-[-50%]`}
        classNameSpan={`font-inter font-bold text-[18px] text-white`}
        icon={arrow}
        onClick={handleConfirm}
      />
    </section>
  );
};

export default StepTwo;
