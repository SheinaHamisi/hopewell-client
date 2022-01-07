import React from "react";

function Input({ label, type, placeholder, change, require, name }) {
  return (
    <div className="col-span-1 mt-5">
      <p className="pl-3 text-gray-600">{label}</p>
      <input
        name={name}
        onChange={(e) => change(e)}
        required={require}
        type={type}
        className="rounded-full px-4 py-3 focus:outline-indigo-700 w-full focus:border-indigo-400 focus:bg-white mt-2 bg-gray-50 border border-indigo-300"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
