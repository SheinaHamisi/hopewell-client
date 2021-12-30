import React from "react";

function ActivateButton({ text, type }) {
  return (
    <button
      type={type}
      className="bg-primary w-full h-16 rounded text-xl text-white font-semibold"
    >
      {text}
    </button>
  );
}

export default ActivateButton;
