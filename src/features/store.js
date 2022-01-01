import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./Slice/Auth/Auth.slice";
import infoReducer from "./Slice/info/info.slice";
import meetingReducer from "./Slice/meeting/meeting.slice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
    info: infoReducer,
    meeting: meetingReducer,
  },
});
