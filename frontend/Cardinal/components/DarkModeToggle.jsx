import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { MdSunny } from 'react-icons/md';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve the stored dark mode value from localStorage
    const storedDarkMode = localStorage.getItem('darkMode');
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Update the document's class and store the value in localStorage
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', JSON.stringify(true));
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', JSON.stringify(false));
    }
  }, [darkMode]);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className='w-9 h-10 flex items-center justify-center rounded-r-full
                        text-slate-50 bg-blue-500 hover:bg-blue-600 fixed top-1/2 left-[0px] 
                          transition-all hover:scale-110 opacity-40 hover:opacity-100 ease-in-out duration-200 
                        dark:bg-[#ffd84c] dark:text-neutral-950 dark:hover:bg-[#f7c71d]'
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
       {darkMode ? <MdSunny /> : <FaMoon />}
    </button>
  );
};

export default DarkModeToggle;
