import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const navigate = useNavigate();

  return { navigate };
};

export default useSearch;
