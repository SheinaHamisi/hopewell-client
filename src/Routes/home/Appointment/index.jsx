import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Step1 from "./Step1";
import { Route, Routes } from "react-router-dom";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
function Appointment() {
  const info = useSelector((state) => state.info);

  const { loading, message, success, error } = info;

  useEffect(() => {
    if (error && !success) {
      toast.error(error);
    } else if (message) {
      toast.success(message);
    }
  }, [message, error, success]);
  return (
    <div className="">
      <Routes>
        <Route path="" element={<Step1 />}></Route>
        {/* <Route path="/Step2" element={<Step2 />}></Route>
        <Route path="/Step3" element={<Step3 />}></Route>
        <Route path="/Step4" element={<Step4 />}></Route> */}
      </Routes>
    </div>
  );
}

export default Appointment;
