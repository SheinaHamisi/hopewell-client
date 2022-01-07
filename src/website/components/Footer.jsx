import React from "react";
import fb from "../../assets/icons/fb.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

import Menuitem from "../components/Menuitem";

function Footer() {
  return (
    <section>
      <div className="footer mt-8">
        <div className="topfooter flex bg-primary h-16 lg:h-36 items-center">
          <div className="footer-img w-3/12 xl:w-5/12">
            <img
              src="logo.png"
              className="w-12 md:w-36 lg:w-36 xl:w-42 md:pl-16"
              alt=""
            />
          </div>

          <div className="footer-list flex text-xs lg:text-xl w-10/12 pl-4 md:pl-12 lg:pl-36 xl:pl-42 text-white md:gap-4">
            <Menuitem
              firstItem="Platform"
              secondItem="Helpcenter"
              thirdItem="Security"
            />
            <Menuitem
              firstItem="Customers"
              secondItem="Use Cases"
              thirdItem="Customer stories"
            />
            <Menuitem
              firstItem="Company"
              secondItem="About"
              thirdItem="Careers"
            />
          </div>
        </div>

        <div className="bottomfooter bg-primary text-white flex justify-between pt-2 md:pt-4 md:pb-4 pb-2 md:px-16">
          <div className="flex">
            <img src="copyrightfooter.png" className="w-4 lg:w-8" alt="" />
            <p className="text-xs lg:text-xl">hopewell</p>
          </div>
          <div className=" flex flex-row-reverse gap-2 md:gap-4">
            <p className="text-xs lg:text-xl">hello@hopewell.com</p>
            <img src={fb} className="w-2" alt="" />
            <img src={instagram} className="w-4" alt="" />
            <img src={twitter} className="w-4" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
