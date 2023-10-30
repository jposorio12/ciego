import { useEffect, useState } from "react";
import { NetworkSelector } from "../../../Redux/Slices/Network";
import { useSelector } from "react-redux";
import useUtils from "../../../Utils";

const useHeaderCount = () => {
  const { isOnline } = useSelector(NetworkSelector);
  const [date, setDate] = useState({ first: "", second: "" });
  const { FormatDate } = useUtils();
  const { getDate } = FormatDate();

  useEffect(() => {
    setDate(getDate());
  }, [isOnline]);

  return { date, isOnline };
};

export default useHeaderCount;
