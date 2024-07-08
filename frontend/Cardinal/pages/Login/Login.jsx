import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import SignLogNavbar from '../../components/SignLogNavbar';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa6';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred: Please try again");
      }
    }
  };

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Optionally, you can store the darkMode state in localStorage here
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  // Load dark mode state from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : false);
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>

      <div className='min-h-screen min-w-screen flex flex-col bg-slate-50 dark:bg-neutral-900'>
        <SignLogNavbar />
        <div className='flex-grow flex items-center justify-center select-none'>
          <div className='w-96 border rounded bg-white border-slate-200 px-7 py-10 m-6 mb-20
         dark:bg-neutral-800 dark:border-neutral-600 '>
            <form onSubmit={handleLogin} className='select-none'>
              <h4 className='text-2xl mb-7 text-slate-950 dark:text-neutral-200 select-text'> Login</h4>

              <input
                type='text'
                placeholder='Email'
                className='w-full text-sm text-slate-950 bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none border-slate-200 placeholder-slate-400 select-none
              dark:border-neutral-600 dark:placeholder-neutral-500 dark:text-neutral-100'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

              <button type='submit' className='w-full text-sm bg-blue-500 text-white p-2 rounded my-1 hover:bg-blue-600
            dark:bg-[#ffd84c] dark:text-neutral-950 dark:hover:bg-[#f7c71d]'>
                Login
              </button>

              <p className='text-sm text-center mt-4  text-slate-950 dark:text-neutral-200 select-text'>
                Not registered yet?{" "}
                <Link to="/signup" className='font-medium text-blue-500 underline cursor-pointer hover:text-blue-600 select-text
               dark:text-[#ffd84c] dark:hover:text-[#f7c71d]'>
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
