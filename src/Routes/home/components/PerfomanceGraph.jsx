import React from "react";

function PerfomanceGraph({ perfomance }) {
  return (
    <div className="bg-white border-2 p-6 rounded-md">
      <img src={perfomance} alt="perfomance" />
    </div>
  );
}

export default PerfomanceGraph;
