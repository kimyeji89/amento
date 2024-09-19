import { useState, useEffect, useRef, createContext, useContext } from "react";

const HeaderHeightContext = createContext(null);

export const useHeaderHeight = () => {
  return useContext(HeaderHeightContext);
};

export const HeaderHeightProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  function updateHeaderHeight() {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
    }
  }

  useEffect(() => {
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    console.log(headerHeight);
  }, [headerHeight]);

  return (
    <HeaderHeightContext.Provider value={{ headerHeight, headerRef }}>
      {children}
    </HeaderHeightContext.Provider>
  );
};
