import moment from 'moment'
import React from 'react'
import { MdCreate, MdDelete } from 'react-icons/md'
import { TbStarFilled, TbStarOff } from 'react-icons/tb'

const NoteCard = ({
    title,
    date,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote }) => {
    return (
        <div className='border-[1.1px] border-blue-400 rounded p-4 bg-white hover:shadow-md hover:shadow-blue-100 hover:border-blue-600 transition-all ease-in-out hover:scale-105 duration-200
          dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-600 dark:hover:shadow-none dark:hover:border-yellow-400 dark:border-[0.7px] select-none' onDoubleClick={onEdit}>
            <div className='flex items-center justify-between select-none'>
                <div>
                    <h6 className='text-sm font-medium cursor-pointer hover:underline line-clamp-1 text-slate-950 dark:text-neutral-200 select-text'
                        onClick={onEdit}>
                        {title}
                    </h6>
                    <span className='text-xs text-slate-500 select-text
                     dark:text-neutral-400'>
                        {moment(date).format('Do MMM YYYY')}
                    </span>
                </div>
                {!isPinned ? (<TbStarOff className={'text-xl text-slate-300 cursor-pointer shrink-0 transition-all ease-in-out hover:scale-125 dark:text-neutral-500'}
                    onClick={onPinNote} />)
                    : (<TbStarFilled className={'text-xl text-yellow-400 cursor-pointer shrink-0 transition-all ease-in-out hover:scale-125'}
                        onClick={onPinNote} />)}
            </div>
            
            <div className='flex items-center justify-between mt-2'>
                <div className='text-xs text-slate-500 select-text
                 dark:text-neutral-400 truncate'>
                    {tags.map((item) => `#${item}`).join(' ')}
                </div>
                <div className='flex items-center gap-2'>
                    <MdCreate
                        className='text-xl text-green-400 cursor-pointer hover:text-green-500 transition-all ease-in-out hover:scale-125 
                        dark:text-neutral-400 dark:hover:text-green-600'
                        onClick={onEdit}
                    />

                    <MdDelete
                        className='text-xl text-red-400 cursor-pointer hover:text-red-500 transition-all ease-in-out hover:scale-125
                        dark:text-neutral-400 dark:hover:text-red-600'
                        onClick={onDelete}
                    />
                </div>

            </div>
        </div>
    )
}

export default NoteCard
