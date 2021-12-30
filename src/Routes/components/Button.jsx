import React from "react";

function PrimaryButton({ text, color, type, loading }) {
  return (
    <button
      className={`bg-${"primary"}   ${
        loading
          ? "cursor-not-allowed"
          : "transition ease-in-out duration-500 hover:bg-white  font-semibold hover:text-primary hover:underline"
      }  px-7 rounded py-3 text-white`}
      type={type}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}

export default PrimaryButton;
