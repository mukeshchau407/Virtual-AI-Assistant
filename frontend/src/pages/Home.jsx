import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-blue-700 via-blue-800 to-blue-950 flex items-center justify-center text-white">
      <div className="text-center max-w-2xl px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Welcome to Your Virtual Assistant
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Smart, fast, and always available to help you manage tasks, answer
          questions, and make life easier.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
