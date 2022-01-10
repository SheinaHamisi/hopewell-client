import React from "react";
import { useNavigate } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/outline";
function HeaderCreate({ info, title, to }) {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <h1 className="text-2xl absolute top-4 left-2 -md:top-0 md:left-0 text-gray-800 font-semibold">
        {title}
      </h1>
      <div
        className=" flex item-start md:pt-14   md:justify-between flex-col-reverse md:flex-row 
      items-center md:items-baseline mt-2"
      >
        <div className="mt-8 md:mt-0">
          <p className="w-full text-sm text-gray-500 md:w-4/5 lg:w-4/6 mt-2">
            {info}
          </p>
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={() => navigate(`/dashboard/${to}`)}
            className={`text-white px-4 bg-red-600 py-3 flex justify-between items-center transition-all ease-in-out duration-500 rounded shadow`}
          >
            <XCircleIcon className="h-6 mr-3" /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderCreate;
