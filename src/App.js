import React from "react";
import logo from "./assets/images/logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./website";
import Login from "./Routes/Auth/Login";
import Register from "./Routes/Auth/Register";
import { ToastContainer } from "react-toastify";
import Activate from "./Routes/Auth/Activate";
import Update from "./Routes/Auth/Update";
import Forgotpassword from "./Routes/Auth/Forgotpassword";
import Dashboard from "./website/Dashboard/Dashboard";
// import Index from "./Routes/Pages";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<Website />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:token" element={<Activate />} />
        <Route path="update-Password" element={<Update />} />
        <Route path="forgot-Password" element={<Forgotpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
