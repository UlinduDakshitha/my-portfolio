import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-3 rounded-full ${
        isDarkMode 
          ? 'bg-gray-800 text-yellow-400' 
          : 'bg-yellow-100 text-gray-800'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle;