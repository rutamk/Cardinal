import React from 'react'
import { getInitials } from '../utils/helper'

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className='flex items-center gap-3 select-none'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full
       dark:text-slate-950 font-medium bg-blue-500 text-slate-50 cursor-default
       dark:bg-[#ffd84c] '>
        {getInitials(userInfo?.fullName)}
      </div>
      <div>
        <p className='text-sm font-medium text-slate-950 dark:text-neutral-200 select-text'>
          {userInfo?.fullName}
        </p>
        <button className='text-sm text-slate-700 underline select-text hover:text-slate-950 hover:scale-105 transition-all ease-in-out
         dark:text-neutral-200 dark:hover:text-neutral-50 '
          onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default ProfileInfo