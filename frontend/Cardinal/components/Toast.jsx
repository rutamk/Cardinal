import React, { useEffect } from 'react'
import { LuCheck } from 'react-icons/lu'
import { MdDeleteOutline } from 'react-icons/md'

const Toast = ({ isShown, message, type, onClose }) => {

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onClose();
        }, 2000);

        return () => {
            clearTimeout(timeoutId)
        };
    }, [onClose]);


    return (
        <div
  className={`fixed bottom-10 left-6 transition-opacity ease-in-out ${
    isShown ? "opacity-100 z-10" : "opacity-0 w-0 h-0"
  } duration-500`}
>
  <div
    className={`bg-white border border-slate-400 shadow-2xl rounded-md ${
      type === "delete" ? "after:bg-red-600" : "after:bg-green-600"
    } ${
      isShown ? "min-w-52 after:w-[5px] after:h-full" : "w-0 h-0"
    } after:absolute after:left-0 after:top-0 after:rounded-l-lg dark:bg-neutral-800 dark:border-neutral-600`}
  >
    <div className="flex items-center gap-3 py-2 px-4">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          type === "delete" ? "bg-red-50" : "bg-green-50"
        } dark:bg-neutral-700`}
      >
        {type === "delete" ? (
          <MdDeleteOutline className="text-xl text-red-600" />
        ) : (
          <LuCheck className="text-xl text-green-600" />
        )}
      </div>
      <p className="text-sm text-slate-800 dark:text-neutral-200">{message}</p>
    </div>
  </div>
</div>


    );
};

export default Toast
