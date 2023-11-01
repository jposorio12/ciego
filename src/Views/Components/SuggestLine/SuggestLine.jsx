import history from "../../../Assets/History.png";

const SuggestLine = ({ suggestion, date, onClick }) => {
  return (
    <div
      className="flex justify-between items-center px-[16px] max-w-[400px] border-b-[1px] border-b-solid border-b-[#E8E8E8] py-[8px]
     w-[90%]  max-w-[400px] mx-auto"
      onClick={onClick}
    >
      <div className="flex flex items-center grow gap-[8px]">
        <img src={history} alt="icon" className="h-[24px] w-[24px]" />
        <h4 className="font-inter font-normal text-[18px] text-[#202020]">
          {suggestion}
        </h4>
      </div>
      <h5 className="font-inter font-normal text-[12px] text-[#202020]">
        {date}
      </h5>
    </div>
  );
};

export default SuggestLine;
