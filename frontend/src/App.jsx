import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppContextProvider>
  );
};

export default App;
