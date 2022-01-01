import React from "react";
import searchIcon from "../../../assets/images/search.png";

function DashInput() {
  return (
    <form className="mt-8 w-full">
      <div className="relative -mt-6">
        <img src={searchIcon} alt="search icon" className="relative top-9 left-3" />
        <input type="text" className="border h-12 w-full" />
      </div>
    </form>
  );
}

export default DashInput;
