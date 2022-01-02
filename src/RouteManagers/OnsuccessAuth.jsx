import React from "react";
import { Outlet, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
function OnsuccessAuth() {
  const { user } = useSelector((state) => state.users);
  return user?.tokens ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default OnsuccessAuth;
