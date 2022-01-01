import axios from "axios";
import decode from "jwt-decode";

export const Server_URL = "http://localhost:5000"; // "https://hopewell-firm.herokuapp.com";
const API_URL = `${Server_URL}/api`;

export const API = axios.create({
  baseURL: API_URL,
});
// TOKENS

export let newAccessToken = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : null;
export const myrefreshToken = localStorage.getItem("refreshToken")
  ? JSON.parse(localStorage.getItem("refreshToken"))
  : localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))?.tokens?.refreshToken
  : null;

export const accessToken = localStorage.getItem("accessToken")
  ? JSON.parse(localStorage.getItem("accessToken"))
  : null;
// ==================================================================== interceptors
API.interceptors.request.use(async (req) => {
  console.log(myrefreshToken);
  if (localStorage.getItem("user") && myrefreshToken && accessToken) {
    const decoded = await decode(accessToken);

    // if access token has expired
    if (decoded?.exp * 1000 < new Date().getTime()) {
      const res = await axios.post(`${API_URL}/auth/refresh`, {
        refreshToken: myrefreshToken,
      });
      newAccessToken = res.data.refreshToken;
      console.log("updated");
      // store in local storage
      localStorage.setItem("accessToken", JSON.stringify(newAccessToken));
    }
    req.headers.Authorization = `Bearer ${newAccessToken}`;
  }
  req.headers.Refresh = "please refresh";

  return req;
});
//===================================================================== interceptors

export const createUserApi = (data) => API.post("/auth/register", data);
export const loginUserApi = (data) => API.post("/auth/login", data);
export const activateUserApi = (data) => API.post("/auth/activate", data);
