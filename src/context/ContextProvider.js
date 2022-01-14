import React from "react";
import AppContext from "./AppContext";

function ContextProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;
