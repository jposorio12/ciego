import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateNetworkStatus } from "../../Redux/Slices/Network";

const GetGlobalHoc = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("online", () => {
      dispatch(updateNetworkStatus(true));
    });
    window.addEventListener("offline", () => {
      dispatch(updateNetworkStatus(false));
    });
  }, []);

  return <>{children}</>;
};

export default GetGlobalHoc;
