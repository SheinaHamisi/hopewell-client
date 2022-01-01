import React from "react";
import userIcon from "../../../assets/images/user-icon.png";
import menu from "../../../assets/images/menu.png";

import DashInput from "./DashInput";

function DashHeader() {
  return (
    <div className="dash-header w-full md:px-8">
      <div className="grid grid-cols-2 items-center w-full">
        <div>
          <img src={menu} alt="menu" className="flex justify-end" />
        </div>
        <div className="flex justify-end">
          <img src={userIcon} alt="user icon" />
        </div>
      </div>
      <DashInput />
    </div>
  );
}

export default DashHeader;
