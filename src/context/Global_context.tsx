import React, { createContext, useState, useMemo, ReactNode } from "react";
import { GlobalContextType, IUser } from "../interfaces/Interfaces"
type GlobalProviderProps = {
  children: ReactNode;
};

const initialUser: IUser = {
  name: "",
  age: 0,
};

export const GlobalContext = createContext<GlobalContextType>({
  user: initialUser,
  handleUser: () => {},
  darkMode: false,
  setDarkMode: () => {},
});

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser>(initialUser);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleUser = (newUser: IUser) => {
    setUser(newUser);
  };

  const contextValue = useMemo(() => {
    return { user, darkMode, handleUser, setDarkMode };
  }, [user, darkMode]);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
