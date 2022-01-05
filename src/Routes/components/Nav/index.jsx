import React from "react";
import { MenuAlt2Icon, BellIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { setShowSideNav } from "../../../features/Slice/info/info.slice";
function Nav() {
  const dispatch = useDispatch();
  return (
    <nav className="w-full px-2  fixed top-0 left-0 right-0 h-14 xl:pl-72  ">
      <div className="flex items-center justify-between w-full h-full">
        <div>
          <MenuAlt2Icon
            onClick={() => dispatch(setShowSideNav())}
            className="h-10 cursor-pointer block  xl:hidden opacity-75"
          />
        </div>
        <div className="flex items-center ">
          <div className="relative cursor-pointer ">
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
