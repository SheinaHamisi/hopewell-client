import React from "react";

function ActivateButton({ text, type, loading }) {
  return (
    <button
      type={type}
      className={`bg-${"primary"}   ${
        loading
          ? "cursor-not-allowed"
          : " duration-500   font-semibold  cursor-pointer"
      }  h-14 rounded  text-white w-full`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}

export default ActivateButton;
