"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-opacity-40 shadow-2xl rounded-full flex items-center justify-center transition-colors duration-500 ease-in-out dark:bg-gray-950 bg-white border-white/40 dark:border-gray-600/40"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      initial={false}
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0.5,
          rotate: theme === "light" ? 0 : 360,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative w-6 h-6"
      >
        {theme === "light" ? (
          <motion.div
            className="absolute inset-0 text-yellow-500"
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <BsSun className="w-full h-full" />
          </motion.div>
        ) : (
          <motion.div
            className="absolute inset-0 text-blue-200"
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -180 }}
            transition={{ duration: 0.5 }}
          >
            <BsMoon className="w-full h-full" />
          </motion.div>
        )}
      </motion.div>
    </motion.button>
  );
}
