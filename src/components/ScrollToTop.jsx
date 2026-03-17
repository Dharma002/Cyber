import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line har baar link click hone par scroll ko zero kar degi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;