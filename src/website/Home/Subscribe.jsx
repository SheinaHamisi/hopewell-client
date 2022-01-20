import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
function Subscribe() {
  return (
    <div className="bg-gray-900  mb-4  text-white  grid grid-cols-4 rounded mx-32 px-16 py-16 ">
      <p className="text-xl font-semibold col-span-3">
        DONT BE LEFT OUT JOIN. SUBSCRIBE TO OUR NEW LATTER
      </p>
      <div className="bg-white px-4 py-3 rounded  col-span-1 flex justify-between items-center">
        <input
          type="text"
          className="placeholder-gray-500 text-sm text-gray-600 w-full
           focus:outline-none bg-transparent focus:border-none"
          placeholder="Your email address "
        />
        <ArrowNarrowRightIcon className="h-6 text-primary cursor-pointer" />
      </div>
    </div>
  );
}

export default Subscribe;
