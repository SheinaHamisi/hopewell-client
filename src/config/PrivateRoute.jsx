import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
function PrivateRoute({ component: Component, ...rest }) {
  const users = useSelector((state) => state.users);

  return (
    <Route
      {...rest}
      render={(props) => {
        return users?.user ? <Component {...props} /> : <Navigate to="/" />;
      }}
    ></Route>
  );
}

export default PrivateRoute;
