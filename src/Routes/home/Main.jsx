import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Dashboard from "./dashboard";
import { setNoShow } from "../../features/Slice/info/info.slice";
function Main() {
  const dispatch = useDispatch();
  return (
    <section
      onClick={() => dispatch(setNoShow())}
      className="bg-gray-200 z-0 px-3 py-2  absolute left-0 right-0 bottom-0 top-12 overflow-hidden overflow-y-scroll"
    >
      <Routes>
        <Route path="" element={<Dashboard />} />
      </Routes>
    </section>
  );
}

export default Main;
