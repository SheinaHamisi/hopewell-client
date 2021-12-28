import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./AboutUs";
import Home from "./Home";
function Index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default Index;
