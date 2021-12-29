import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
function Input({ label, type, placeholder, pass, change, name, require }) {
  const [show, setShow] = useState(false);

  return (
    <div className="cols-span-1">
      <h4 className="text-gray-800 text-md font-thin">{label}</h4>

      <div
        className="border border-gray-500 focus:border-gray-400 focus:bg-white
            mt-2 w-full px-4 py-4 font-medium bg-gray-100 flex justify-between items-center"
      >
        <input
          required={require}
          name={name}
          onChange={(e) => change(e)}
          type={pass && show ? "text" : type}
          className=" placeholder-gray-500 text-sm w-full
           focus:outline-none bg-transparent "
          placeholder={placeholder}
        />
        {pass && (
          <div className="cursor-pointer" onClick={() => setShow(!show)}>
            {show ? (
              <EyeIcon className="h-5" />
            ) : (
              <EyeOffIcon className="h-5" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
