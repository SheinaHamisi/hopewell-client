import React from "react";

function Calendar({ img }) {
  return (
    <div className="bg-white p-8 border-2 rounded-md flex justify-center items-center">
      <img src={img} alt="img" className="w-28" />
    </div>
  );
}

export default Calendar;
