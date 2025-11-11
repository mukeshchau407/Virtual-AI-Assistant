import React, { useEffect, useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { serverUrl, navigate } = useAppContext();

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setData((prev) => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    } else {
      setRememberMe(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state === "login") {
      try {
        const result = await axios.post(`${serverUrl}/api/auth/login`, data, {
          withCredentials: true,
        });
        console.log("Login success!");

        if (rememberMe) {
          localStorage.setItem("userEmail", data.email);
        }
        navigate("/");
      } catch (err) {
        console.error("Login failed:", err.response?.data || err.message);
      }
    } else {
      try {
        const result = await axios.post(`${serverUrl}/api/auth/signup`, data, {
          withCredentials: true,
        });
        console.log("Register success!");
        setState("login");
      } catch (err) {
        console.error("Register failed:", err.response?.data || err.message);
      }
    }
  };

  const onChangeHandler = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-6 sm:w-[350px] text-center border border-zinc-300/60 dark:border-zinc-700 rounded-2xl px-8 bg-white dark:bg-zinc-900"
      >
        <h1 className="text-zinc-900 dark:text-white text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Register"}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2 pb-6">
          {state === "login" ? "Welcome Back !" : "Please SignUp to Continue !"}
        </p>

        {state !== "login" && (
          <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
            {/* User Icon */}
            <FaUser className="text-zinc-500 dark:text-zinc-400" />
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          {/* Mail Icon */}
          <FaEnvelope className="text-zinc-500 dark:text-zinc-400" />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 h-12 rounded-full overflow-hidden pl-6 gap-2">
          {/* Lock Icon */}
          <FaLock className="text-zinc-500 dark:text-zinc-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="bg-transparent text-zinc-600 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-400 outline-none text-sm w-full h-full"
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="pr-4 text-zinc-500 dark:text-zinc-400 text-sm"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        {state === "login" && (
          <div className="mt-5 text-left flex justify-between">
            <label className="text-sm text-indigo-500 dark:text-indigo-400 flex items-center gap-0.5 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="cursor-pointer"
              />
              Remember me
            </label>
            <a
              className="text-sm text-indigo-500 dark:text-indigo-400"
              href="#"
            >
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 mb-11">
          {state === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            type="button"
            className="text-indigo-500 dark:text-indigo-400 cursor-pointer"
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
          >
            {state === "login" ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
