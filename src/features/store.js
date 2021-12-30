import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./Slice/Auth/Auth.slice";
import infoReducer from "./Slice/info/info.slice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
    info: infoReducer,
  },
});
