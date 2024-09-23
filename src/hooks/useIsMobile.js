import { useState, useEffect } from "react";

export default function useIsMobile() {
  const mobileWidth = 430;
  const tabletWidth = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= mobileWidth);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= tabletWidth);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= mobileWidth);
      setIsTablet(window.innerWidth <= tabletWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileWidth, tabletWidth]);

  return { isMobile, isTablet };
}
