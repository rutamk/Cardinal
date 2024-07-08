import React, { useState } from 'react'
import { MdAdd, MdClose } from 'react-icons/md'

const TagInput = ({ tags, setTags }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNewTag = () => {
        if (inputValue.trim() !== "") {
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    return (
        <div className=''>
            {tags?.length > 0 && (
                <div className='flex items-center gap-2 flex-wrap mt-2'>
                    {tags.map((tag, index) => (
                        <span key={index} className='flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded border-none
                        dark:border dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200'>
                            # {tag}
                            <button onClick={() => { handleRemoveTag(tag); }}>
                                <MdClose />
                            </button>

                        </span>
                    ))}

                </div>
            )}

            <div className='flex items-center gap-4 mt-3'>
                <input
                    type='text'
                    value={inputValue}
                    className='text-sm bg-slate-100 border px-3 py-2 rounded outline-none text-slate-950 placeholder:text-slate-400 border-none
                     dark:border dark:border-neutral-600 dark:bg-neutral-800 dark:placeholder-neutral-400 dark:text-neutral-200'
                    placeholder='Add Tags'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />

                <button className='w-8 h-8 flex items-center justify-center rounded border-none bg-blue-500 hover:bg-blue-700
                dark:bg-[#ffd84c] dark:hover:bg-[#f7c71d] dark:border-neutral-950'
                    onClick={() => {
                        addNewTag();
                    }}
                >
                    <MdAdd className='text-2xl text-white dark:text-neutral-950'/>
                </button>

            </div>
        </div>
    )
}

export default TagInput