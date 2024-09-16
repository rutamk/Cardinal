import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-6 ">
      <img
        src={imgSrc}
        alt="No Notes"
        className=" w-20 md:w-40 ml-8 .day-mode-svg dark:night-mode-svg"
      />
      <p
        className="md:w-1/2 w-2/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5
      dark:text-neutral-200 "
      >
        {message}
      </p>
    </div>
  );
};

export default EmptyCard;
