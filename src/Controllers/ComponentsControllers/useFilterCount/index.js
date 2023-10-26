import { useNavigate } from "react-router-dom";

const useFilterCount = () => {
  const navigate = useNavigate();

  const handleBlockIfNumber = (e) => {
    const blockedNumbers = ["e", "+", "-", "."];
    if (blockedNumbers.some((n) => n === `${e.key}`.toLocaleLowerCase())) {
      e.preventDefault();
    }
  };

  return { handleBlockIfNumber, navigate };
};

export default useFilterCount;
