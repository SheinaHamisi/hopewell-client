import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Main from "./Main";
function Index() {
  return (
    <div className="w-screen  grid grid-cols-6  overflow-hidden ">
      <SideNav />
      <div className="col-span-5 h-screen ">
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
