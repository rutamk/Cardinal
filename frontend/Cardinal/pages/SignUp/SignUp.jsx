import React, { useState } from 'react'
import PasswordInput from '../../components/PasswordInput';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom'
import SignLogNavbar from '../../components/SignLogNavbar';
import { MdSunny } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa6';


const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password.");
      return;
    }
    setError("");

    //SignUp API call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullName: name,
        email: email,
        password: password,
      });

      if (response.data && response.data.error) {
        setError(response.data.message);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        // toast.success("Successfuly Account Created");
        navigate("/home");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occured: Please try again");
      }
    }
  };


  return (
      <div className='min-h-screen min-w-screen flex flex-col  bg-slate-50 select-none
       dark:bg-neutral-900'>
        <SignLogNavbar />
        <div className='flex flex-grow items-center justify-center '>
          <div className='w-96 border rounded bg-white border-slate-200 px-7 py-10 m-6 mb-20 select-none
         dark:bg-neutral-800 dark:border-neutral-600 '>
            <form onSubmit={handleSignUp}>
              <h4 className='text-2xl mb-7 text-slate-950 dark:text-neutral-200 select-text'>SignUp</h4>

              <input
                type='text'
                placeholder='Name'
                className='w-full text-sm text-slate-950 bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none border-slate-200 placeholder-slate-400 select-none
              dark:border-neutral-600 dark:placeholder-neutral-500 dark:text-neutral-100'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type='email'
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
                Create Account
              </button>

              <p className='text-sm text-center mt-4 text-slate-950 select-text
               dark:text-neutral-200'>
                Already have an account? {""}
                <Link to="/login" className='font-medium text-blue-500 underline hover:text-blue-600 select-text
              dark:text-[#ffd84c] dark:hover:text-[#f7c71d]'>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  )
}


export default SignUp;
