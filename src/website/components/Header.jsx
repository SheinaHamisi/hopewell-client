import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt3Icon, MenuAlt2Icon } from "@heroicons/react/solid";
function Header() {
  const [show, setShow] = useState(false);
  return (
    <nav className="w-full h-16  flex justify-between items-center  overflow-x-hidden">
      <Link to="/">
        <img src="logo.png" className=" h-16" alt="" />
      </Link>

      <div className="md:flex items-center gap-x-8 hidden md:block ">
        <TheLink text="Home" to="" />
        <TheLink text="About" to="" />
        <TheLink text="Services" to="" />
        <TheLink text="Events" to="" />
        <TheLink text="Gillary" to="" />
      </div>
      <div className="hidden md:block ">
        <Link
          to="/login"
          className="  text-primary hover:text-black font-bold  transition ease-in-out duration-300 "
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="px-8  py-3 ml-4 bg-primary text-white font-bold  transition ease-in-out duration-300 hover:text-primary hover:bg-gray-100"
        >
          Sign Up
        </Link>
      </div>
      <div
        className={`absolute right-0 ${
          show ? "w-80" : "hidden"
        }  md:hidden bottom-0 top-0 bg-gray-50  transition ease-in-out duration-500 `}
      >
        <div className="inset-0 flex flex-col justify-start px-4 gap-y-4">
          <div className="w-full flex justify-between items-center pt-3 px-2">
            <MenuAlt2Icon
              onClick={() => setShow(!show)}
              className="h-12 block md:hidden"
            />
            <img src="logo.png" className="h-14 w-14" alt="" />
          </div>
          <TheLink text="Home" to="" />
          <TheLink text="About" to="" />
          <TheLink text="Services" to="" />
          <TheLink text="Events" to="" />
          <TheLink text="Gillary" to="" />
          <Link
            to="/login"
            className="px-8 rounded py-2 mx-4 bg-primary text-white font-bold shadow-lg transition ease-in-out duration-300 hover:text-primary hover:bg-gray-100"
          >
            Sign In
          </Link>
        </div>
      </div>
      <MenuAlt3Icon
        onClick={() => setShow(!show)}
        className="h-12 block md:hidden"
      />
    </nav>
  );
}

export default Header;
const TheLink = ({ text, to }) => {
  return (
    <Link
      to={`/${to}`}
      className="text-lg  text-gray-500 hover:text-gray-900 transition ease-in-out duration-300"
    >
      {text}
    </Link>
  );
};
