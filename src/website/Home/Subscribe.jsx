import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
function Subscribe() {
  return (
    <div className="bg-gray-900  mb-2 mt-8 text-white  grid grid-row-2 rounded mx-2 px-16 py-8 lg:grid-cols-2 lg:py-24 xl:text-center">
      <p className="text-xl font-semibold col-span-3 lg:text-2xl xl:text-3xl">
        DONT BE LEFT OUT JOIN. SUBSCRIBE TO OUR NEWS LETTER
      </p>
      <div className="bg-white px-4 py-4 mt-8 rounded w-48 lg:w-72 col-span-1 flex justify-between items-center xl:ml-96">
        <input
          type="text"
          className="placeholder-gray-500 text-sm lg:text-xl text-gray-600 w-full
           focus:outline-none bg-transparent focus:border-none "
          placeholder="Your email address "
        />
        <ArrowNarrowRightIcon className="h-6 text-primary cursor-pointer" />
      </div>
    </div>
  );
}

export default Subscribe;
