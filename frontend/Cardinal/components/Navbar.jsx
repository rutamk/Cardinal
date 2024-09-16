import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = ({ userInfo, onSearchQuery, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchQuery(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div
      className="bg-white grid grid-cols-1 sm:grid-cols-3 items-center h-fit sm:h-16 px-4 sm:px-6 py-2 drop-shadow select-none
     dark:bg-neutral-800 dark:text-neutral-200"
    >
      <div className=" col-span-1 flex justify-center sm:justify-start">
        <h2
          className="text-lg sm:text-xl font-medium text-blue-500 py-2 sm:py-0 select-text
      dark:text-[#ffd84c]"
        >
          Cardinal
        </h2>
      </div>

      <div className="my-2 sm:my-0 sm:ml-4 col-span-1 flex justify-center">
        <SearchBar
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>

      <div className="my-2 sm:my-0 sm:ml-4 col-span-1 flex justify-center sm:justify-end select-text">
        <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Navbar;
