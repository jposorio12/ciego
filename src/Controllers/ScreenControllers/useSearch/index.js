import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountDetailSelector } from "../../../Redux/Slices/CountDetail";
import { useSelector } from "react-redux";

const useSearch = () => {
  const navigate = useNavigate();
  const [match, setMatch] = useState([]);
  const { counts } = useSelector(CountDetailSelector);

  const handleChange = ({ target: { value } }) => {
    const filterCounts = counts?.filter(({ route }) =>
      route?.toString()?.includes(value.toString())
    );
    if (value === "") {
      setMatch([]);
    } else {
      setMatch(filterCounts);
    }
  };

  return { navigate, handleChange, match };
};

export default useSearch;
