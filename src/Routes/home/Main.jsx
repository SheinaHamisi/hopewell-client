import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import Account from "./Account";
import Dashboard from "./dashboard";
import { setNoShow } from "../../features/Slice/info/info.slice";
import JoinMeeting from "./JoinMeeting";
import Apointment from "./Appointment";
import { USERSLIST, CREATELOCKPRICE } from "./AdminPages";

function Main() {
  const dispatch = useDispatch();
  return (
    <section
      onClick={() => dispatch(setNoShow())}
      className="bg-gray-100 z-0 px-3 py-2  absolute left-0 right-0 bottom-0 top-12 overflow-hidden overflow-y-scroll"
    >
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/join-meeting" element={<JoinMeeting />} />
        <Route path="/apointment" element={<Apointment />} />
        {/*  only admin */}
        <Route path="/User-list" element={<USERSLIST />} />
        <Route path="/location-setup" element={<CREATELOCKPRICE />} />
      </Routes>
    </section>
  );
}

export default Main;
