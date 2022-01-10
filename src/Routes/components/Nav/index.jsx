import React from "react";
import { MenuAlt2Icon, BellIcon, SearchIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowSideNav,
  setShowNotification,
} from "../../../features/Slice/info/info.slice";
function Nav() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  return (
    <nav className="w-full bg-gray-50 px-2  sticky top-0 left-0 right-0 h-14 xl:pl-72 overflow-hidden  ">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center">
          <MenuAlt2Icon
            onClick={() => dispatch(setShowSideNav())}
            className="h-10 cursor-pointer block  xl:hidden opacity-75"
          />
          {/* <div className="border border-primary px-4 py-2 rounded ml-10 bg-white flex justify-between items-center">
            <SearchIcon className="h-5" />
            <input
              type="text"
              placeholder="Search"
              className="placeholder-gray-500 text-sm w-full
           focus:outline-none bg-transparent focus:border-none "
            />
          </div> */}
        </div>
        <div className="flex items-center ">
          <p className="mr-4 text-md font-thin text-gray-500">
            Hi, {user?.name.split(" ")[0]}
          </p>
          <div
            onClick={() => dispatch(setShowNotification())}
            className="relative cursor-pointer "
          >
            <BellIcon className="h-9   opacity-40" />
            <span className="absolute top-1 right-3   font-bold text-indigo-700 ">
              2
            </span>
            <div className="h-3 w-3 bg-primary animate-ping rounded-full absolute top-0 right-0"></div>
          </div>
          <img
            src="https://picsum.photos/200/300"
            className="h-9 w-9 object-cover rounded-full ml-3 cursor-pointer shrink shadow-md border border-primary"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
