import addWhite from "../../../../Assets/AddWhite.png";
import removeWhite from "../../../../Assets/RemoveWhite.png";

const InputAddCount = ({ label, setValue, name, number, setNumber }) => {
  return (
    <div className="max-w-[400px] px-[16px]">
      {label}
      <div
        className="flex justify-between items-center max-w-[400px] rounded-[80px] border-[1px] border-solid
        border-[#A6A6A6] h-[52px] mb-[16px] p-[4px]"
      >
        <div
          className="h-[40px] w-[40px] rounded-full bg-[#19418E] flex items-center justify-center cursor-pointer"
          onClick={() =>
            setNumber((prev) => {
              if (prev - 1 < 0) {
                setValue && setValue(name, 0, { shouldValidate: true });
                return 0;
              } else {
                setValue && setValue(name, prev - 1, { shouldValidate: true });
                return prev - 1;
              }
            })
          }
        >
          <img src={removeWhite} alt="icon" className="w-[40px] h-[40px]" />
        </div>
        <div className="font-inter font-bold text-[32px]">{number}</div>
        <div
          className="h-[40px] w-[40px] rounded-full bg-[#19418E] text-white flex items-center justify-center cursor-pointer"
          onClick={() => {
            setNumber((prev) => {
              setValue && setValue(name, prev + 1, { shouldValidate: true });
              return prev + 1;
            });
          }}
        >
          <img src={addWhite} alt="icon" className="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default InputAddCount;
