import React from "react";
import { PlusCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import Div from "./Div";
function Header({ showCreate, setShowCreate, text, num }) {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <h2 className="text-5xl font-bold text-gray-900">{text}</h2>
        <span className="text-xs text-gray-500">{num}</span>
      </div>
      <div>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className={` ${
            showCreate ? "bg-red-600" : "bg-primary "
          } text-white px-4 py-3  font-bold flex justify-between items-center transition-all ease-in-out duration-500  shadow`}
        >
          {showCreate ? (
            <>
              <>
                <XCircleIcon className="h-6 mr-3" /> Cancel
              </>
            </>
          ) : (
            <>
              <PlusCircleIcon className="h-6 mr-3" /> Create
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
