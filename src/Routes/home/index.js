import React from "react";
import SideNav from "./../components/sideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import Body from "./Main";
import InfoBar from "../components/InfoSection";
function index() {
  return (
    <div className="h-screen w-screen relative  bg-gray-50 ">
      <SideNav />
      <main className="h-screen absolute   xl:left-64 pl-4  top-0 right-0 bottom-0 z-0   -left-4">
        <div className="h-full w-full relative">
          <Nav />
          <Body />
          <Footer />
        </div>
      </main>
      {/* <InfoBar /> */}
    </div>
  );
}

export default index;
