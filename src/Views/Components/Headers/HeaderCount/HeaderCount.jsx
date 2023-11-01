import logo from "../../../../Assets/LogoMobile.png";
import arrow from "../../../../Assets/ArrowLeft.png";
import logout from "../../../../Assets/Logout.png";
import time from "../../../../Assets/reloadInternet.png";
import useComponentsControllers from "../../../../Controllers/ComponentsControllers";
import useComponents from "../../";

const HeaderCount = ({ handleLogOut }) => {
  const { useHeaderCount } = useComponentsControllers();
  const { WifiIcon } = useComponents();
  const { date, isOnline } = useHeaderCount();

  return (
    <header className="bg-[#0C2047]">
      <div className="flex justify-between items-center p-[16px] max-w-[400px] mx-auto">
        <img src={arrow} alt="icon" className="cursor-pointer" />
        <img src={logo} alt="icon" className="w-auto h-[20px]" />
        <img
          src={logout}
          alt="icon"
          className="cursor-pointer"
          onClick={handleLogOut}
        />
      </div>
      <div className="flex mx-auto max-w-[400px] px-[16px] pt-[10px] pb-[16px] items-center">
        <img src={time} alt="icon" className="mr-[8px] h-[24px] w-[24px]" />
        <div className="mr-[20px]">
          <h4 className="font-inter font-bold text-[10px] text-white">
            <span className="block">{date?.first}</span>
            <span>{date?.second} (GMT-4)</span>
          </h4>
          <h4 className="font-inter font-normal text-[10px] text-white">
            Última actualización data maestra
          </h4>
        </div>
        <span className="w-[2px] h-[24px] bg-white" />
        <div className="flex gap-[10px] items-center ml-[16px]">
          <WifiIcon isOnline={isOnline} />
          <h4 className="font-inter font-bold text-[10px] text-white max-w-[50px]">
            Conexión estable
          </h4>
        </div>
      </div>
    </header>
  );
};

export default HeaderCount;
