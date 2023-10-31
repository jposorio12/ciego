import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import useComponents from "../..";
import arrow from "../../../../Assets/saveEnabled.png";
import filter from "../../../../Assets/Filter.png";
import succes from "../../../../Assets/succesCreateCount.png";
import deleteIcon from "../../../../Assets/atentionDelete.png";

const StepTwoDetail = ({ steps, submitForm }) => {
  const { setStep } = steps;

  const {
    CardSkuSuccesful,
    ModalBay,
    ModalBayCount,
    ModalSearch,
    ButtonDefault,
    Filter,
    ModalCreateSucces,
    ModalCreateError,
  } = useComponents();
  const { useStepTwoDetail } = useComponentsControllers();
  const {
    data,
    openBay,
    // onclickAdd,
    setOpenBay,
    openBayCount,
    setOpenBayCount,
    // skus,
    handleChangeFilter,
    bays,
    skusSelected,
    StepTwoDetailForm,
    onClickEdit,
    onClickDelete,
    openModalSearch,
    setOpenModalSearch,
    openSucces,
    openDeleteSku,
    setOpenSucces,
    setOpenDeleteSku,
    onClickRemoveSku,
  } = useStepTwoDetail();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isValid },
  } = StepTwoDetailForm;

  return (
    <section className="relative">
      <h2 className="font-inter font-bold text-[20px] text-[#3D73DD] px-[16px] my-[16px] max-w-[400px] mx-auto">
        Agregar SKU al conteo
      </h2>

      <Filter
        icon={filter}
        handleChange={handleChangeFilter}
        placeholder="Buscar SKU..."
        classNameContainer="!bg-white"
        classNameInput="!bg-white"
        activeOnFocus
        handleFocus={() => setOpenModalSearch(true)}
      />

      {openModalSearch && (
        <ModalSearch setOpenModalSearch={setOpenModalSearch} />
      )}

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
              onClickEdit={onClickEdit}
              onClickDelete={onClickDelete}
            />
          </div>
        )
      )}

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
          edit={data?.edit}
          setOpenBay={setOpenBay}
          setOpenBayCount={setOpenBayCount}
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

      {openSucces && (
        <ModalCreateSucces
          icon={succes}
          title="¡Tu conteo ha sido editado con éxito!"
          text="Recuerda que podrás editarlo, siempre y cuándo éste continúe en estado"
          onClick={() => setStep(0)}
        />
      )}

      {openDeleteSku && (
        <ModalCreateError
          icon={deleteIcon}
          title="¿Realmente quieres eliminar este SKU?"
          text="Recuerda que no podrás volver a editarlo y se perderá para siempre."
          sku
          onClick={() => {
            setOpenDeleteSku(false);
            onClickRemoveSku();
          }}
          onclickArrow={() => setOpenDeleteSku(false)}
        />
      )}

      <div className="mb-[50px]" />
      <ButtonDefault
        text="Guardar"
        classNameButton={`rounded-[32px] h-[64px] w-[87%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-[#19418E] shadow-buttonCount sticky bottom-[80px]`}
        classNameSpan={`font-inter font-bold text-[18px] text-white`}
        icon={arrow}
        onClick={() => setOpenSucces(true)}
      />
      <ButtonDefault
        text="Agregar Sku"
        classNameButton={`rounded-[32px] h-[64px] w-[87%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-white shadow-buttonCount sticky bottom-[40px] border-[2px] border-solid border-[#19418E]`}
        classNameSpan={`font-inter font-bold text-[18px] text-[#19418E]`}
      />
    </section>
  );
};

export default StepTwoDetail;
