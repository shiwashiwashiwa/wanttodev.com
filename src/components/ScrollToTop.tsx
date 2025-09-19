import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページ遷移時に最上部にスクロール
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
