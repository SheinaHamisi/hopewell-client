import React, { useEffect } from "react";
import decode from "jwt-decode";
import { Outlet, Navigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getAccessTokens } from "../features/Slice/Auth/AuthAsync";
import { clearUserInfo } from "../features/Slice/Auth/Auth.slice";

// refreshToken
function Authenticated() {
  const dispatch = useDispatch();
  // request new access token after some times
  const users = useSelector((state) => state.users);
  let accessToken = users?.user?.tokens?.accessToken;
  let refreshToken = users?.user?.tokens?.refreshToken;

  useEffect(() => {
    if (!accessToken || !refreshToken) return;

    const decoded = decode(accessToken);
    // 4miutes before expirery
    const minutesBeforeExpire = decoded?.exp * 1000 - 240000;
    const interval = setInterval(() => {
      // make request for new access tokens
      const data = { refreshToken: refreshToken };
      dispatch(getAccessTokens(data));
    }, minutesBeforeExpire);
    // if token has expired
    if (decoded?.exp * 1000 < new Date().getTime()) {
      // if token has expired

      dispatch(clearUserInfo());
    }
    return () => clearInterval(interval);
  }, []);

  return users?.user?.tokens ? <Outlet /> : <Navigate to="/login" />;
}

export default Authenticated;

//  if( decoded?.exp * 1000 < new Date().getTime(){}
