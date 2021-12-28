import React from "react";
import logo from "./assets/images/logo.png";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./website";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import { ToastContainer } from "react-toastify";
import Activate from "./Routes/Activate";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<Website />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:token" element={<Activate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
