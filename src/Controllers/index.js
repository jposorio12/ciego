import useGeneralControllers from "./GeneralControllers";
import useScreenControllers from "./ScreenControllers";
import useComponentsControllers from "./ComponentsControllers";

const useControllers = () => {
  return {
    useScreenControllers,
    useComponentsControllers,
    useGeneralControllers,
  };
};

export default useControllers;
