import useComponentsControllers from "../../../Controllers/ComponentsControllers";

const StatusLine = ({ step, quantitySteps, isDetail }) => {
  const { useStatusLine } = useComponentsControllers();
  const { returnStylesSpan, returnStylesLine } = useStatusLine();
  const arraySteps = new Array(quantitySteps ?? 3).fill(0);

  return (
    <div className="flex justify-center px-[16px] py-[8px] max-w-[400px] mt-[8px] mx-auto">
      {arraySteps?.map((_, i) => (
        <div className="flex items-center" key={i}>
          <span
            className={`${
              step === i + 1 ? "w-[32px] h-[32px]" : "w-[24px] h-[24px]"
            } text-white rounded-full flex items-center justify-center text-center ${returnStylesSpan(
              step,
              i
            )}`}
          >
            {i + 1}
          </span>
          <span
            className={`${isDetail ? "w-[250px]" : "w-[130px]"} h-[4px] ${
              i + 2 > arraySteps.length && "hidden"
            } ${returnStylesLine(step, i)}`}
          />
        </div>
      ))}
    </div>
  );
};

export default StatusLine;
