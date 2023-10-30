import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = ({ children, change }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, change]);

  return <>{children}</>;
};

export default ScrollTop;
