import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const serverUrl = "http://localhost:4000";
  const [userData, setUserData] = useState({
    isLoggedIn: false,
    assistantName: null,
  });

  const value = { navigate, serverUrl, userData, setUserData };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => {
  return useContext(AppContext);
};
