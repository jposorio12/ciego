import useComponents from "../..";
import arrow from "../../../../Assets/ArrowRightDisable.png";
import arrowEnabled from "../../../../Assets/ArrowRightWhite.png";
import useComponentsControllers from "../../../../Controllers/ComponentsControllers";

const StepOne = ({ form, steps }) => {
  const { handleSubmit, control, errors, isValid } = form;
  const { setStep } = steps;
  const { SelectDefault, InputDefault, ButtonDefault } = useComponents();
  const { useStepOne } = useComponentsControllers();
  const { submitForm, date } = useStepOne(setStep);

  return (
    <form
      className="max-w-[400px] mx-auto px-[16px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <h2 className="font-inter font-bold text-[20px] text-[#3D73DD] mt-[10px]">
        Ingreso de datos conteo
      </h2>
      <h3 className="font-inter font-bold text-[14px] text-[#0C2047]">
        Fecha y hora de creación
      </h3>
      <h4 className="font-inter font-normal text-[12px] text-[#202020] mb-[10px]">
        {date?.first} {date?.second} (GMT-4)
      </h4>

      <SelectDefault
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            CCD <span className="text-[#FF1130]">*</span>
          </span>
        }
        placeholder="Ingresa el número de ruta"
        options={["DA33", 1]}
        classNameSelect="h-[45px] border-[1px] border-solid border-[#A6A6A6] outline-none rounded-[4px] px-[6px] mt-[4px] 
          font-inter font-normal text-[14px]"
        name="ccd"
        control={control}
        errors={errors}
      />
      <SelectDefault
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            Almacén <span className="text-[#FF1130]">*</span>
          </span>
        }
        placeholder="Ingresa el número de ruta"
        options={[3010]}
        classNameSelect="h-[45px] border-[1px] border-solid border-[#A6A6A6] outline-none rounded-[4px] px-[6px] mt-[4px]
          font-inter font-normal text-[14px]"
        name="store"
        control={control}
        errors={errors}
      />
      <SelectDefault
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            Ruta <span className="text-[#FF1130]">*</span>
          </span>
        }
        placeholder="Ingresa el número de ruta"
        options={[50178]}
        classNameSelect="h-[45px] border-[1px] border-solid border-[#A6A6A6] outline-none rounded-[4px] px-[6px] mt-[4px]
          font-inter font-normal text-[14px]"
        name="route"
        control={control}
        errors={errors}
      />
      <InputDefault
        control={control}
        name="conveyor"
        defaultValue=""
        type="number"
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            Transportador <span className="text-[#FF1130]">*</span>
          </span>
        }
        classNameContainer="mt-[8px] w-full"
        classNameContainerInput="p-[8px] border-[1px] border-solid border-[#A6A6A6] rounded-[4px] mt-[4px]"
        classNameInput="w-full outline-none placeholder:text-black"
        placeholder="Ingresa el número del transportador"
        inputCreate
        errors={errors}
      />
      <SelectDefault
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            Conductor <span className="text-[#FF1130]">*</span>
          </span>
        }
        placeholder="Ingresa el número de ruta"
        options={["choco"]}
        classNameSelect="h-[45px] border-[1px] border-solid border-[#A6A6A6] outline-none rounded-[4px] px-[6px] mt-[4px]
          font-inter font-normal text-[14px]"
        name="driver"
        control={control}
        errors={errors}
      />
      <InputDefault
        control={control}
        name="plaque"
        defaultValue=""
        type="text"
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            Placa <span className="text-[#FF1130]">*</span>
          </span>
        }
        classNameContainer="mt-[8px] w-full"
        classNameContainerInput="p-[8px] border-[1px] border-solid border-[#A6A6A6] rounded-[4px] mt-[4px]"
        classNameInput="w-full outline-none placeholder:text-black"
        placeholder="Ingresa el número del transportador"
        errors={errors}
        inputCreate
      />
      <InputDefault
        control={control}
        name="truckSheet"
        defaultValue=""
        type="number"
        label={
          <span className="font-inter font-bold text-[14px] text-[#0C2047]">
            Camion <span className="text-[#FF1130]">*</span>
          </span>
        }
        classNameContainer="mt-[8px] w-full"
        classNameContainerInput="p-[8px] border-[1px] border-solid border-[#A6A6A6] rounded-[4px] mt-[4px]"
        classNameInput="w-full outline-none placeholder:text-black"
        placeholder="Ingresa el número del transportador"
        errors={errors}
        inputCreate
      />
      <ButtonDefault
        disabled={!isValid}
        text="Siguiente"
        classNameButton={`rounded-[32px] ${
          !isValid ? "bg-[#E8E8E8]" : "bg-[#19418E]"
        } h-[64px] w-[80%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px]`}
        classNameSpan={`font-inter font-bold text-[18px] ${
          !isValid ? "text-[#A6A6A6]" : "text-white"
        }`}
        icon={!isValid ? arrow : arrowEnabled}
      />
    </form>
  );
};

export default StepOne;
