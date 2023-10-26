import useScreens from "./Screens";
import useComponents from "./Components";
import useLayouts from "./Layouts";

const useViews = () => {
  return { useScreens, useComponents, useLayouts };
};

export default useViews;
