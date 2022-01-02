import React from "react";
import BottomNav from "../components/dashboard/BottomNav";
import DashHeader from "../components/dashboard/DashHeader";
import userIconImage from "../../assets/images/user-icon.png";
import { UserIcon } from "@heroicons/react/solid";

function Dashboard() {
  return (
    <div className="dashboard grid lg:grid-cols-5 grid-rows-8 h-screen">
      <div className="w-screen lg:hidden px-6 flex items-center">
        <DashHeader userIcon={userIconImage} />
      </div>
      <div className="hidden lg:block side-bar bg-blue-400 px-8 py-12">
        sidebar
      </div>
      <div className="content-area col-span-3 row-span-6 lg:row-auto bg-red-400 px-8 py-12">
        content area
      </div>
      <div className="hidden lg:block upcoming bg-green-400 px-8 py-12">
        upcoming
      </div>
      <div className="lg:hidden bottom-nav w-screen  flex items-center ">
        <BottomNav />
      </div>
    </div>
  );
}

export default Dashboard;
