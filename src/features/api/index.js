import axios from "axios";
import decode from "jwt-decode";

export const Server_URL = "https://hopewell-firm.herokuapp.com"; //"https://hopewell-firm.herokuapp.com"; //  "http://localhost:5000";
const API_URL = `${Server_URL}/api`;

export const API = axios.create({
  baseURL: API_URL,
});
// TOKENS

// ==================================================================== interceptors
API.interceptors.request.use(async (req) => {
  if (localStorage.getItem("user")) {
    const accessToken = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))?.tokens?.accessToken
      : null;
    const decoded = await decode(accessToken);

    // if access token has not expired attach headers
    if (decoded?.exp * 1000 > new Date().getTime()) {
      req.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      // if it has expired clear localStorage
      localStorage.clear();
    }
  }
  // if you want to attach more info
  // req.headers.Refresh = "please refresh";

  return req;
});
//===================================================================== interceptors

export const createUserApi = (data) => API.post("/auth/register", data);
export const loginUserApi = (data) => API.post("/auth/login", data);
export const activateUserApi = (data) => API.post("/auth/activate", data);
export const getAccessTokenApi = (data) => API.post("/auth/refresh", data);
export const forgotPasswordApi = (data) => API.post("/auth/requestReset", data);
export const updatePasswordApi = (data) =>
  API.post("/auth/resetPassword", data);

// services api
export const getServiceTypesApi = (data) => API.get("/locPrice/all", data);
