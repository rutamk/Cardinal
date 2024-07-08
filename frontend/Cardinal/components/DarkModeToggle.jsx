import React from 'react';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa6';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (darkMode) {
        mainContent.classList.remove('dark');
      } else {
        mainContent.classList.add('dark');
      }
    }
  };

  return (
    <button
      className={`w-9 h-10 flex items-center justify-center rounded-r-full
                  text-slate-50 bg-blue-500 hover:bg-blue-600 fixed top-1/2 left-[0px]
                  transition-all hover:scale-110 opacity-40 hover:opacity-100 ease-in-out duration-200
                  ${darkMode ? 'dark:bg-[#ffd84c] dark:text-neutral-950 dark:hover:bg-[#f7c71d]' : ''}`}
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <MdSunny /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
