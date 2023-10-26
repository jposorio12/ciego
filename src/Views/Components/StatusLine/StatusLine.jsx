import { StepSelector } from "../../../Redux/Slices/Steps";
import { useSelector } from "react-redux";
import useComponentsControllers from "../../../Controllers/ComponentsControllers";

const StatusLine = () => {
  const { useStatusLine } = useComponentsControllers();
  const { returnStylesSpan, returnStylesLine } = useStatusLine();
  const { step, totalSteps } = useSelector(StepSelector);
  const arraySteps = new Array(totalSteps).fill(0);

  return (
    <div className="flex px-[16px] py-[8px] max-w-[400px] mt-[8px] mx-auto">
      {arraySteps?.map((el, i) => (
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
            className={`w-[140px] h-[4px] ${
              i + 2 > arraySteps.length && "hidden"
            } ${returnStylesLine(step, i)}`}
          />
        </div>
      ))}
    </div>
  );
};

export default StatusLine;
