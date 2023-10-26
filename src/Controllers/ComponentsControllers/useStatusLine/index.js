const useStatusLine = () => {
  const spanConditions = {
    equal: "bg-[#3D73DD]",
    big: "bg-[#A6A6A6]",
    small: "bg-[#0C2047]",
  };

  const lineConditions = {
    true: "bg-[#0C2047]",
    false: "bg-[#A6A6A6]",
  };

  const returnStylesSpan = (step, i) => {
    if (step === i + 1) {
      return spanConditions.equal;
    } else if (step < i + 1) {
      return spanConditions?.big;
    } else {
      return spanConditions?.small;
    }
  };

  const returnStylesLine = (step, i) => {
    return lineConditions[step > i + 1];
  };

  return { returnStylesSpan, returnStylesLine };
};

export default useStatusLine;
