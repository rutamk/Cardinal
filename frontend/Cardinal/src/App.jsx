import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import './index.css';
import DarkModeToggle from '../components/DarkModeToggle';

const App = () => {
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

  return (
    <Router>
      <div id="main-content" className="min-h-screen">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<SignUp />} />
        </Routes>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </Router>
  );
};

export default App;
