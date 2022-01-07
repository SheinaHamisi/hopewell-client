import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  VideoCameraIcon,
  CalendarIcon,
  UsersIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { MenuAlt3Icon, ChartPieIcon, UserIcon } from "@heroicons/react/solid";
import { setShowSideNav } from "../../../features/Slice/info/info.slice";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
function SideNav() {
  const info = useSelector((state) => state.info);
  const { showSideNav } = info;
  const dispatch = useDispatch();
  return (
    <div
      className={`h-screen absolute  ${
        showSideNav ? "w-full left-0 md:w-2/5 block " : "  w-0  -left-32"
      }   bg-gray-50 xl:left-0 top-0 bottom-0 z-50   duration-300 ease-in-out transition-all
     xl:w-1/5 xl:block   `}
    >
      <div className="w-full h-full ">
        <div className="w-full flex  items-center pl-4 pr-3 pt-2 ">
          <div className="w-full flex gap-x-2 px-2 pt-4  ">
            <div className="h-4 w-4 rounded-full bg-red-500 animate-pulse "></div>
            <div className="h-4 w-4 rounded-full bg-orange-500 animate-pulse"></div>
            <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <MenuAlt3Icon
            onClick={() => dispatch(setShowSideNav())}
            className="h-10 cursor-pointer block  xl:hidden  opacity-75"
          />
        </div>
        <div className="w-full h-5/6 mt-4 pl-4 pr-3 pt-2 overflow-hidden overflow-y-scroll  scrollbar-thin scrollbar scrollbar-thumb-indigo-500 scrollbar-track-indigo-50 ">
          <div>
            <SectionName name="Analytics" />
            <SideNavLink name="Dashboard" link="" Icon={ChartPieIcon} />
            <SideNavLink
              name="Book Meeting"
              link="apointment"
              Icon={CalendarIcon}
            />
            <SideNavLink
              name="Join Meeting"
              link="join-meeting"
              Icon={VideoCameraIcon}
            />

            <SectionName name="Admin" />
            <SideNavLink name="users" link="User-list" Icon={UsersIcon} />
            <SideNavLink
              name="location"
              link="location-setup"
              Icon={LocationMarkerIcon}
            />

            <SectionName name="Settings" />
            <SideNavLink name="Account" link="account" Icon={UserIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;

const SideNavLink = ({ name, link, Icon }) => {
  const [active, setActive] = useState(false);
  let base = `/dashboard/${link}`;

  const location = useLocation();
  useEffect(() => {
    const url = window.location.pathname;
    if (url === base) {
      return setActive(true);
    }
    return setActive(false);
  }, [location]);

  return (
    <div>
      <NavLink
        to={`${base}`}
        className={`flex ${
          active ? "text-indigo-700 bg-indigo-100   " : "text-gray-400 "
        }  transition ease-in-out -mt-1 font-serif font-extralight 
      duration-300 bg-transparent w-full items-center px-3 py-2 hover:bg-indigo-100 
       hover:text-indigo-700  cursor-pointer rounded-full`}
      >
        <Icon className={`h-5  ${active && "animate-pulse"} `} />
        <span className="ml-2 text-sm">{name}</span>
      </NavLink>
    </div>
  );
};

const SectionName = ({ name }) => {
  return <h3 className="text-gray-400 text-sm mb-2 uppercase">{name}</h3>;
};
