import React from "react";
import logo from "./assets/images/logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./website";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import { ToastContainer } from "react-toastify";
import Activate from "./Routes/Activate";
import Update from "./Routes/Update";
import Forgotpassword from "./Routes/Forgotpassword";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/*" element={<Website />} />
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
