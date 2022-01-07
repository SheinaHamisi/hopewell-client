import React from "react";

function Eventcards({ image, title, description}) {
  return (
    <div className="h-48 md:text-center mt-12 rounded overflow-hidden shadow-lg">
      <img src={image} className="ml-2 mt-4 pl-0 w-24 md:w-36 md:pl-6" alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xs md:text-sm mb-2">{title}</div>
        <p className="text-xs md:text-sm  text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Eventcards;
