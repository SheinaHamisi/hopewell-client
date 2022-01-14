import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Website from "./website";
import Login from "./Routes/Auth/Login";
import Register from "./Routes/Auth/Register";
import { ToastContainer } from "react-toastify";
import Activate from "./Routes/Auth/Activate";
import Update from "./Routes/Auth/Update";
import Forgotpassword from "./Routes/Auth/Forgotpassword";
import Dashboard from "./Routes/home/index";
import Meeting from "./Routes/meeting";
import Authenticated from "./RouteManagers/Authenticated";
import OnsuccessAuth from "./RouteManagers/OnsuccessAuth";
import { connectWithSocketServer } from "./features/socket/public.socket";
import CallEnded from "./Routes/meeting/CallEnded";

// import Index from "./Routes/Pages";
function App() {
  // connect to socket

  useEffect(() => {
    connectWithSocketServer();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/*" element={<Website />} />
          <Route path="CallEnded" element={<CallEnded />} />

          {/* if user has logged in dont access this pages */}
          <Route element={<OnsuccessAuth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/activate/:token" element={<Activate />} />
            <Route path="/update-Password/:token" element={<Update />} />
            <Route path="/forgot-Password" element={<Forgotpassword />} />
          </Route>
          {/* Authenticaion needed */}
          <Route element={<Authenticated />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/meeting/:meetingID" element={<Meeting />} />
          </Route>

          <Route path="*" element={<CallEnded />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
