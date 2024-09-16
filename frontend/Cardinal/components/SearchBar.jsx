import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }

    if (e.key === "Escape") {
      onClearSearch();
    }
  };
  return (
    <div
      className="w-80 flex items-center bg-slate-100 px-4 border rounded-md border-slate-400 select-none
         dark:bg-neutral-600  dark:border-neutral-800"
    >
      <input
        type="text"
        placeholder="Search Notes"
        className="w-full text-xs bg-transparent py-[11px] outline-none placeholder:text-slate-400 text-slate-950 select-none
                 dark:placeholder:text-neutral-400 dark:text-neutral-200"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />

      {value && (
        <IoMdClose
          onClick={onClearSearch}
          className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3 hover:scale-125 transition-all ease-in-out
                 dark:text-neutral-400 dark:hover:text-neutral-200"
        />
      )}

      <FaMagnifyingGlass
        onClick={handleSearch}
        className="text-slate-400 cursor-pointer hover:text-black hover:scale-110 transition-all ease-in-out
                 dark:text-neutral-400 dark:hover:text-neutral-200"
      />
    </div>
  );
};

export default SearchBar;
