import { configureStore } from "@reduxjs/toolkit";
import usersReducers from "./Slice/Auth/Auth.slice";
import infoReducer from "./Slice/info/info.slice";
import meetingReducer from "./Slice/meeting/meeting.slice";
import apointmentReducer from "./Slice/apointment/apointment.slice";

export const store = configureStore({
  reducer: {
    users: usersReducers,
    info: infoReducer,
    meeting: meetingReducer,
    appointment: apointmentReducer,
  },
});
