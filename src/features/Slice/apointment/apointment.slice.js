import { createSlice } from "@reduxjs/toolkit";
import { getServiceType } from "./apointment.async";

const initialState = {};

const apointmentSlice = createSlice({
  name: "apointment",
  initialState,
  extraReducers: {
    [getServiceType.pending]: (state, action) => {
      state.serviceTypes = null;
    },
    [getServiceType.fulfilled]: (state, action) => {
      state.serviceTypes = action.payload.results;
    },
    [getServiceType.rejected]: (state, action) => {
      state.serviceTypes = null;
    },
  },
});

export default apointmentSlice.reducer;
