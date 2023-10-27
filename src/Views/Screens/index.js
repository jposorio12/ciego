import Login from "./Login";
import Offline from "./Offline";
import Count from "./Count";
import Search from "./Search";
import CountDetail from "./CountDetail";
import CountDetailId from "./CountDetailId";

const useScreens = () => {
  return { Login, Offline, Count, Search, CountDetail, CountDetailId };
};

export default useScreens;
