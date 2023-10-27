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
    CardCount,
  } = useComponents();
  const { useCountDetailId } = useScreenControllers();
  const { open, setOpen, openCancel, setOpenCancel, goBack } =
    useCountDetailId();

  return (
    <PrivateLayout Header={<HeaderDetailId goBack={goBack} />}>
      <CardCount
        numberRoute={500774}
        date="22/08/23"
        state={3}
        lastUpdate="22/08/23"
        numberDriver="402-13091990"
        truckSheet={2435}
        plaque="L337500"
        driver="El choquito"
        isDetail
      />
      <h2 className="font-inter font-bold text-[14px] text-[#0C2047] max-w-[400px] px-[16px] my-[10px] mx-auto">
        Transacciones / SKUs
      </h2>
      <CardSkuSuccesful classNameContainer="!bg-white" />
      {open && (
        <ModalDetailId setOpen={setOpen} setOpenCancel={setOpenCancel} />
      )}
      {openCancel && (
        <ModalCancelCount setOpen={setOpen} setOpenCancel={setOpenCancel} />
      )}
      <ButtonDefault
        icon={add}
        classNameIcon="h-[32px] w-[32px]"
        classNameButton="rounded-full bg-[#19418E] fixed bottom-[30px] right-[24px] h-[64px] w-[64px] flex justify-center items-center cursor-pointer"
        onClick={() => setOpen(true)}
      />
    </PrivateLayout>
  );
};

export default CountDetailId;
