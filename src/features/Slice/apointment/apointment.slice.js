import { createSlice } from "@reduxjs/toolkit";
import {
  createLockPrice,
  createService,
  deleteLocPrice,
  getAllServices,
  getlockPrice,
  getOneLockPrice,
  getOneService,
  updateLockPrice,
} from "./apointment.async";

const initialState = {};

const apointmentSlice = createSlice({
  name: "apointment",
  initialState,
  extraReducers: {
    [getlockPrice.pending]: (state, action) => {
      state.lockPrice = null;
    },
    [getlockPrice.fulfilled]: (state, action) => {
      state.lockPrice = action.payload.results;
    },
    [getlockPrice.rejected]: (state, action) => {
      state.lockPrice = null;
    },
    [createLockPrice.fulfilled]: (state, action) => {
      let lockPrice = state.lockPrice ? state.lockPrice : [];
      lockPrice.push(action.payload.results);
      state.lockPrice = lockPrice;
    },

    [getOneLockPrice.fulfilled]: (state, action) => {
      let lockPrice = state.lockPrice ? state.lockPrice : [];
      lockPrice.push(action.payload.results);
      state.lockPrice = lockPrice;
    },

    [updateLockPrice.fulfilled]: (state, action) => {
      let item = action.payload.results;
      let items = state.lockPrice ? state.lockPrice : [];
      let lockPrice = items?.filter((l) => l?._id !== item?._id);
      lockPrice.push(item);
      state.lockPrice = lockPrice;
    },
    [deleteLocPrice.fulfilled]: (state, action) => {
      let item = action.payload.results;
      let items = state.lockPrice ? state.lockPrice : [];
      let lockPrice = items?.filter((l) => l?._id !== item?._id);
      state.lockPrice = lockPrice;
    },

    [getAllServices.fulfilled]: (state, action) => {
      state.services = action.payload.results;
    },

    [createService.fulfilled]: (state, action) => {
      let services = state?.services ? state?.services : [];
      services?.pus(action.payload.results);
      state.services = services;
    },

    [getOneService.fulfilled]: (state, action) => {
      state.service = action.payload.results;
    },
  },
});

export default apointmentSlice.reducer;
