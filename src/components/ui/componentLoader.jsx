import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="glass-card rounded-xl p-8 w-full max-w-xs mx-auto flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <svg
        className="animate-spin h-12 w-12 text-primary mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25 stroke-current"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75 stroke-current"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      <p className="text-primary font-semibold tracking-wide">Loading...</p>
    </motion.div>
  );
};

export default Loader;
