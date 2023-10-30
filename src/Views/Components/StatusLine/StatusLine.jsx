import useComponentsControllers from "../../../Controllers/ComponentsControllers";

const StatusLine = ({ step }) => {
  const { useStatusLine } = useComponentsControllers();
  const { returnStylesSpan, returnStylesLine } = useStatusLine();
  const arraySteps = new Array(3).fill(0);

  return (
    <div className="flex justify-center px-[16px] py-[8px] max-w-[400px] mt-[8px] mx-auto">
      {arraySteps?.map((_, i) => (
        <div className="flex items-center" key={i}>
          <span
            className={`w-[24px] h-[24px] text-white rounded-full text-center ${returnStylesSpan(
              step,
              i
            )}`}
          >
            {i + 1}
          </span>
          <span
            className={`w-[130px] h-[4px] ${
              i + 2 > arraySteps.length && "hidden"
            } ${returnStylesLine(step, i)}`}
          />
        </div>
      ))}
    </div>
  );
};

export default StatusLine;
