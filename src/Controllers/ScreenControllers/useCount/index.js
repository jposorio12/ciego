import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CountDetailSelector,
  updateId,
} from "../../../Redux/Slices/CountDetail";

const useCount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, counts } = useSelector(CountDetailSelector);

  const arrayCounts = counts;

  const onClick = () => {
    const exist = counts?.find((count) => count?.id === id);
    if (exist) {
      dispatch(updateId(id + 1));
    }
    navigate("/detail");
  };

  return { navigate, arrayCounts, onClick };
};

export default useCount;
