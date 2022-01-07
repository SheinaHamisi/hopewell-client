import React from "react";

function Header() {
  return (
    <div>
      <div className="header flex md:justify-between">
        <div>
          <img
            src="logo.png"
            className="w-16 md:w-28 lg:w-36 md:ml-8 lg:ml-20"
            alt=""
          />
        </div>

        <div className="flex items-center md:space-x-8 md:mr-12 lg:text-xl text-xs">
          <NavLink text="Home" />

          <NavLink text="HOW IT WORKS" />
          <NavLink text="FAQS" />
          <NavLink text="PRICING" />
          <NavLink text="CONTRACT" />
        </div>
      </div>
    </div>
  );
}

export default Header;

const NavLink = ({ text }) => {
  return <p>{text}</p>;
};
