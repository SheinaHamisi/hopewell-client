import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Home";
function Index() {
  return (
    <div className="mx-2 mt-4">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Index;
