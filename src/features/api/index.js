import axios from "axios";
import decode from "jwt-decode";

export const Server_URL = "http://localhost:5000"; // "https://hopewell-firm.herokuapp.com"; //  ;
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
// users Api
export const createUserApi = (data) => API.post("/auth/register", data);
export const loginUserApi = (data) => API.post("/auth/login", data);
export const activateUserApi = (data) => API.post("/auth/activate", data);
export const getAccessTokenApi = (data) => API.post("/auth/refresh", data);
export const forgotPasswordApi = (data) => API.post("/auth/requestReset", data);
export const updatePasswordApi = (data) =>
  API.post("/auth/resetPassword", data);

// lockPrice api
export const getServiceTypesApi = (data) => API.get("/locPrice/all", data);
export const createLockPriceApi = (data) => API.post("/locPrice/create", data);
export const getOneLockPriceApi = (id) => API.get(`/locPrice/one/${id}`);
export const updateLockPriceApi = (data) =>
  API.patch(`/locPrice/update/${data?._id}`, data);
export const deleteLocPriceAPI = (id) => API.delete(`/locPrice/delete/${id}`);

// servicer API
export const getAllServicesApi = (data) => API.get("/service/all", data);
export const createServiceApi = (data) => API.post("/service/create", data);
export const getOneServiceApi = (id) => API.get(`/service/one/${id}`);
export const updateServiceApi = (data) =>
  API.patch(`/service/update/${data?._id}`, data);

// appointment
export const getAllTherapistsApi = (data) => API.get("/auth/therapists");
