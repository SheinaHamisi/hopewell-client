import React from "react";

function Graph({ graph }) {
  return (
    <div className="border-2 rounded-md bg-white p-8">
      <img src={graph} alt="graph" />
    </div>
  );
}

export default Graph;
