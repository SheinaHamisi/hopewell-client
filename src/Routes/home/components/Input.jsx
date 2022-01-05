import React from "react";

function Input({ label }) {
  return (
    <div className="col-span-1 mt-5">
      <p className="pl-3 text-gray-600">{label}</p>
      <input
        type="text"
        className="rounded-full px-4 py-3 focus:outline-indigo-700 w-full focus:border-indigo-400 focus:bg-white mt-2 bg-gray-50 border border-indigo-300"
        placeholder="First Name"
      />
    </div>
  );
}

export default Input;
