import { useState } from "react";

const InputAddCount = ({ label }) => {
  const [number, setNumber] = useState(0);

  return (
    <div className="max-w-[400px] px-[16px]">
      {label}
      <div
        className="flex justify-between items-center max-w-[400px] rounded-[80px] border-[1px] border-solid
        border-[#A6A6A6] h-[52px] mb-[16px] p-[4px]"
      >
        <div
          className="h-[40px] w-[40px] rounded-full bg-[#E8E8E8] flex items-center justify-center cursor-pointer"
          onClick={() =>
            setNumber((prev) => {
              if (prev - 1 < 0) {
                return 0;
              } else {
                return prev - 1;
              }
            })
          }
        >
          <span>-</span>
        </div>
        <div className="font-inter font-bold text-[32px]">{number}</div>
        <div
          className="h-[40px] w-[40px] rounded-full bg-[#19418E] text-white flex items-center justify-center cursor-pointer"
          onClick={() => setNumber((prev) => prev + 1)}
        >
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default InputAddCount;