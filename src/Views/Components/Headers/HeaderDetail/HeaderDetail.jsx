import arrow from "../../../../Assets/ArrowLeft.png";
import close from "../../../../Assets/ClearWhite.png";
import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import { useNavigate } from "react-router-dom";

const HeaderDetail = ({ steps, route }) => {
  const { step, setStep } = steps;
  const { useHeaderDetail } = useComponentsControllers();
  const { handleClickBack } = useHeaderDetail(step, setStep);
  const navigate = useNavigate();

  return (
    <header className="bg-[#0C2047]">
      <div className="flex max-w-[400px] items-center justify-between mx-auto px-[16px] py-[8px]">
        <img
          src={arrow}
          alt="icon"
          className="h-[32px] w-[32px] cursor-pointer"
          onClick={handleClickBack}
        />
        <h2 className="font-inter font-normal text-[14px] text-white">
          Paso {step} de 3
        </h2>
        <img
          src={close}
          alt="icon"
          className="h-[32px] w-[32px] cursor-pointer"
          onClick={() => navigate(`${route}`)}
        />
      </div>
    </header>
  );
};

export default HeaderDetail;
