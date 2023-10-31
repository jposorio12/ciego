import useComponents from "../..";
import confirm from "../../../../Assets/newCount.png";
import edit from "../../../../Assets/Edit.png";
import succes from "../../../../Assets/succesCreateCount.png";
import error from "../../../../Assets/erroCreateCount.png";
import useComponentsControllers from "../../../../Controllers/ComponentsControllers";

const StepThree = ({ setStep }) => {
  const {
    CardCount,
    CardSkuSuccesful,
    ButtonDefault,
    ModalCreateSucces,
    ModalCreateError,
  } = useComponents();
  const { useStepThree } = useComponentsControllers();
  const { activeCount, form, skus, handleCreate, openSucces, openError } =
    useStepThree();

  return (
    <section>
      <h1 className="font-inter font-bold text-[20px] text-[#3D73DD] max-w-[400px] px-[16px] my-[10px] mx-auto">
        Resumen del conteo
      </h1>
      <CardCount
        numberRoute={form?.route}
        date={activeCount?.date}
        state={activeCount?.status}
        lastUpdate={activeCount?.lastUpdateDate}
        numberDriver={form?.conveyor}
        truckSheet={form?.truckSheet}
        plaque={form?.plaque}
        driver={form?.driver}
      />
      <h2 className="font-inter font-bold text-[14px] text-[#0C2047] max-w-[400px] px-[16px] my-[10px] mx-auto">
        Transacciones / SKUs
      </h2>
      {skus?.map(
        ({ number, name, bay, quantity, faultOption, fault, measure }) => (
          <CardSkuSuccesful
            key={number}
            number={number}
            name={name}
            bay={bay}
            quantity={quantity}
            fault={faultOption}
            total={fault}
            measure={measure}
            classNameContainer="!bg-white"
          />
        )
      )}
      <div className="mb-[80px]" />
      <ButtonDefault
        text="Confirmar y crear"
        classNameButton={`rounded-[32px] h-[48px] w-[80%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-[#19418E] shadow-buttonCount sticky bottom-[140px]`}
        classNameSpan={`font-inter font-bold text-[18px] text-white`}
        classNameIcon="h-[28px] w-[28px]"
        icon={confirm}
        onClick={handleCreate}
      />
      <ButtonDefault
        text="Editar"
        classNameButton={`rounded-[32px] h-[48px] w-[80%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] shado-buttonCount border-[2px] border-solid border-[#19418E]
        sticky bottom-[70px] bg-white`}
        classNameSpan={`font-inter font-bold text-[18px] text-[#19418E]`}
        classNameIcon="h-[28px] w-[28px]"
        icon={edit}
        onClick={() => setStep(1)}
      />
      {openSucces && (
        <ModalCreateSucces
          icon={succes}
          title="¡Tu conteo ha sido creado con éxito!"
          text="Recuerda que podrás editarlo, siempre y cuándo éste continúe en estado "
          route="/count"
        />
      )}
      {openError && (
        <ModalCreateError
          icon={error}
          title="Hemos tenido problemas para crear tu conteo."
          text="Por favor inténtalo nuevamente."
          setStep={setStep}
        />
      )}
    </section>
  );
};

export default StepThree;
