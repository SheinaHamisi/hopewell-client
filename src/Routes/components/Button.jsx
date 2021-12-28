import React from "react";

function PrimaryButton({ text, color, type }) {
  return (
    <button
      className={`bg-${"primary"} transition ease-in-out duration-500 
    hover:bg-white text-white font-semibold 
    hover:text-primary hover:underline px-7 rounded py-3`}
      type={type}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
