import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [mobilMenu, setMobilMenu] = useState(false);

  const mobilMenuDegistir = () => {
    setMobilMenu(!mobilMenu);
  };

  return (
    <NavbarContext.Provider value={{ mobilMenu, setMobilMenu, mobilMenuDegistir }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
