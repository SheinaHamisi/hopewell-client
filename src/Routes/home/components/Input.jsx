import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
function Input({ label, type, placeholder, change, pass, require, name, val }) {
  const [show, setShow] = useState(false);
  return (
    <div className="col-span-1 mt-5 w-full">
      <p className="pl-3 text-gray-600">{label}</p>
      <div className=" px-4 flex justify-between items-center py-3 focus:outline-indigo-700 w-full focus:border-indigo-400 focus:bg-white mt-2 bg-gray-50 border border-indigo-300">
        <input
          defaultValue={val}
          name={name}
          onChange={(e) => change(e)}
          required={require}
          type={pass && show ? "text" : type}
          className="placeholder-gray-500 text-sm w-full
           focus:outline-none bg-transparent focus:border-none "
          placeholder={placeholder}
        />{" "}
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
