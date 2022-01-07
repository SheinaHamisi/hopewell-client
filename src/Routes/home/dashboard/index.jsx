import React from "react";
import ClientDashBoard from "./ClientDash";
import AdminDashBoard from "./AdminDash";
import TherapistDash from "./TherapistDash";
function index() {
  return (
    <div className="h-full  ">
      <ClientDashBoard />
      {/* <AdminDashBoard />
      <TherapistDash /> */}
    </div>
  );
}

export default index;
