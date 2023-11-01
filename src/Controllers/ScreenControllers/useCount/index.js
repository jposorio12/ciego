import { useState } from "react";
import {
  updateFilterCounts,
  FilterSelector,
} from "../../../Redux/Slices/Filters";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CountDetailSelector,
  updateId,
} from "../../../Redux/Slices/CountDetail";
import { logOut } from "../../../Redux/Slices/Login";
import useUtils from "../../../Utils";

const useCount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, counts } = useSelector(CountDetailSelector);
  const { filterCounts } = useSelector(FilterSelector);
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [match, setMatch] = useState([]);
  const { FormatDate } = useUtils();
  const { dateInline } = FormatDate();

  const arrayCounts = counts;

  const onClick = () => {
    const exist = counts?.find((count) => count?.id === id);
    if (exist) {
      dispatch(updateId(id + 1));
    }
    navigate("/detail");
  };

  const handleChange = ({ target: { value } }) => {
    const filterCounts = arrayCounts?.filter(({ form }) =>
      form?.route?.toString()?.includes(value.toString())
    );

    if (value === "") {
      setMatch([]);
    } else {
      setMatch(filterCounts);
    }
  };

  const handleUpdateSuggestions = (valueItem) => {
    const filter = filterCounts?.filter(({ value }) => value !== valueItem);
    const object = { value: valueItem, date: dateInline() };
    dispatch(updateFilterCounts([...filter, object]));
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return {
    navigate,
    arrayCounts,
    onClick,
    handleChange,
    openModalSearch,
    setOpenModalSearch,
    match,
    handleUpdateSuggestions,
    filterCounts,
    handleLogOut,
  };
};

export default useCount;
