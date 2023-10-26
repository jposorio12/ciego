import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import useComponents from "../..";

const StepTwo = () => {
  const { CardSkuCount, ModalBay, ModalBayCount } = useComponents();
  const { useStepTwo } = useComponentsControllers();
  const {
    data,
    bays,
    openBay,
    onclickAdd,
    setOpenBay,
    openBayCount,
    setOpenBayCount,
  } = useStepTwo();

  return (
    <section className="relative">
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
      <ModalBayCount number={data?.number} name={data?.name} />
    </section>
  );
};

export default StepTwo;
