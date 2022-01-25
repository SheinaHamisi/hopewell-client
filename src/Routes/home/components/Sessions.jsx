import React from "react";

function Sessions({ sessions }) {
  return (
    <div className="border-2 border-gray-250 bg-white flex justify-center items-center flex-col rounded-md h-full w-full p-6">
      <p className="font-bold text-primary mb-4">Your sessions</p>
      <div className="border-2 w-full h-full rounded-md flex justify-center items-center">
        <p className="text-4xl text-gray-500">{sessions}</p>
      </div>
    </div>
  );
}

export default Sessions;
