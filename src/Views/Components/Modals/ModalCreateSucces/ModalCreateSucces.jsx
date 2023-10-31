import { useNavigate } from "react-router-dom";

const ModalCreateSucces = ({ icon, title, text, route, onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#202020b3] backdrop-blur-sm z-[2]">
      <div
        className="relative w-full h-full bg-no-repeat bg-cover cursor-pointer bg-background"
        onClick={() => {
          if (route) {
            navigate(`${route}`);
          } else {
            onClick();
          }
        }}
      >
        <img
          src={icon}
          alt="succes"
          className="w-[195px] h-auto pt-[150px] mx-auto"
        />
        <h1 className="font-inter font-bold text-[32px] text-white mx-auto text-center leading-[40px] my-[16px]">
          {title}
        </h1>
        <h2 className="font-inter font-normal text-[18px] text-white text-center px-[16px]">
          {text}
          <span className="font-bold"> Por Enviar a SAP.</span>
        </h2>
      </div>
    </div>
  );
};

export default ModalCreateSucces;
