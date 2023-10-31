import arrow from "../../../../Assets/ArrowLeft.png";
import points from "../../../../Assets/points.png";

const HeaderDetailId = ({ goBack, stateCard }) => {
  return (
    <header
      className={`${
        stateCard === 3 ? "bg-[#797979]" : "bg-[#0C2047]"
      } px-[16px] py-[8px]`}
    >
      <div className="flex items-center max-w-[400px] px-[16px] justify-between mx-auto">
        <img
          src={arrow}
          alt="icon"
          className="h-[32px] w-[32px] cursor-pointer"
          onClick={goBack}
        />
        <h2 className="font-inter font-normal text-[14px] text-white">
          Detalle de conteo
        </h2>
        <img src={points} alt="icon" className="h-[32px] w-[32px]" />
      </div>
    </header>
  );
};

export default HeaderDetailId;
