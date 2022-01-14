import React from "react";

function ClientDash() {
  return (
    <div className="grid grid-cols-1 md:grid md:grid-cols-5 h-full w-full">
      {/* 1si & 2nd */}
      <div className="bg-red-200">1</div>
      <div className="md:col-span-2 bg-green-300 row-span-2">2</div>
      <div className="bg-red-300">1</div>
      <div className="bg-blue-200 row-span-3">1</div>
      {/* 2nd & 3rd */}
      <div className="bg-red-300 row-span-2">1</div>
      <div className="bg-green-400">1</div>
      <div className="bg-blue-400">1</div>
      <div className="bg-blue-300 md:col-span-2">2</div>
    </div>
  );
}

export default ClientDash;
