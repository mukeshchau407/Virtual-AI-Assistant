import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { AppContextProvider } from "./context/AppContext";
import Home from "./pages/Home";

const App = () => {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContextProvider>
  );
};

export default App;
