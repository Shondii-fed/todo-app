import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full border shadow-md fixed top-4 right-4 z-50 transition-colors duration-300
        ${darkMode
          ? 'bg-white text-gray-900 border-white hover:bg-gray-100'
          : 'bg-gray-900 text-white border-gray-900 hover:bg-gray-800'}
      `}
      aria-label="Toggle Dark Mode"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={darkMode ? 'sun' : 'moon'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default DarkModeToggle;
