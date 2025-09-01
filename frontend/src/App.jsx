import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Customize from "./pages/Customize"; // create this page
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { userData, navigate } = useAppContext();

  useEffect(() => {
    if (userData?.isLoggedIn) {
      if (userData?.assistantName) {
        navigate("/");
      } else {
        navigate("/customize");
      }
    } else {
      navigate("/login");
    }
  }, [userData, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </div>
  );
};

export default App;
