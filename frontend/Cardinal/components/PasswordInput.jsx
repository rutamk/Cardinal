import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => { setIsShowPassword(!isShowPassword) }


  return (
    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3  border-slate-200 select-none
    dark:border-neutral-600'>

      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? 'text' : 'password'}
        placeholder={placeholder || 'Password'}
        className='w-full text-sm text-slate-950 bg-transparent py-3 rounded mr-4 outline-none placeholder-slate-400 select-none
         dark:placeholder-neutral-500 dark:text-neutral-100'
      />

      {isShowPassword ? <FaRegEye
        size={22}
        className='text-blue-500 cursor-pointer dark:text-[#ffd84c]'
        onClick={() => toggleShowPassword()}
      /> : <FaRegEyeSlash
        size={22}
        className='text-slate-400 cursor-pointer dark:text-neutral-500'
        onClick={() => toggleShowPassword()}
      />}
    </div>
  )
}

export default PasswordInput