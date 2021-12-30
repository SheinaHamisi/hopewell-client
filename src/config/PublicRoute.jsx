import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";
function PublicRoute({ component: Component, ...rest }) {
  const users = useSelector((state) => state.users);
  return (
    <Routes>
      {" "}
      <Route
        {...rest}
        render={(props) => {
          return users?.user ? (
            <Navigate to="/Dashboard" />
          ) : (
            <Component {...props} />
          );
        }}
      ></Route>
    </Routes>
  );
}

export default PublicRoute;
