import useComponents from "../..";
import confirm from "../../../../Assets/newCount.png";
import edit from "../../../../Assets/Edit.png";

const StepThree = () => {
  const { CardCount, CardSkuSuccesful, ButtonDefault } = useComponents();

  return (
    <section>
      <h1 className="font-inter font-bold text-[20px] text-[#3D73DD] max-w-[400px] px-[16px] my-[10px] mx-auto">
        Resumen del conteo
      </h1>
      <CardCount />
      <h2 className="font-inter font-bold text-[14px] text-[#0C2047] max-w-[400px] px-[16px] my-[10px] mx-auto">
        Transacciones / SKUs
      </h2>
      <CardSkuSuccesful classNameContainer="!bg-white" />
      <ButtonDefault
        text="Confirmar y crear"
        classNameButton={`rounded-[32px] h-[48px] w-[80%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] bg-[#19418E] shadow-buttonCount fixed bottom-[140px] left-[50%]
        transform translate-x-[-50%]`}
        classNameSpan={`font-inter font-bold text-[18px] text-white`}
        classNameIcon="h-[28px] w-[28px]"
        icon={confirm}
      />
      <ButtonDefault
        text="Editar"
        classNameButton={`rounded-[32px] h-[48px] w-[80%] max-w-[400px] mx-auto mt-[16px] cursor-pointer
          flex items-center justify-center gap-[16px] shado-buttonCount border-[2px] border-solid border-[#19418E]
        fixed bottom-[70px] left-[50%] transform translate-x-[-50%]`}
        classNameSpan={`font-inter font-bold text-[18px] text-[#19418E]`}
        classNameIcon="h-[28px] w-[28px]"
        icon={edit}
      />
    </section>
  );
};

export default StepThree;