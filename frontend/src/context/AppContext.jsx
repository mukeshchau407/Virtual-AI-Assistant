import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const nevigate = useNavigate();
  const serverUrl = "http://localhost:4000";

  const value1 = { nevigate, serverUrl };

  return <AppContext.Provider value={value1}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  return useContext(AppContext);
};
