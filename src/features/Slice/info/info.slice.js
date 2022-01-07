import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  message: null,
  error: null,
  success: null,
  showSideNav: false,
  showNotification: false,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setShowNotification(state) {
      state.showNotification = !state.showNotification;
    },
    setShowSideNav(state) {
      state.showSideNav = !state.showSideNav;
    },
    setNoShow(state) {
      state.showSideNav = false;
      state.showNotification = false;
    },

    clearMessages(state) {
      // when pending
      state.loading = true;
      state.message = null;
      state.error = null;
      state.success = null;
    },
    setMessage(state, action) {
      state.loading = false;
      state.message = action.payload;
      state.success = true;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(clearMessages, (state, action) => {
      console.log("hey");
      console.log(action.payload);
    });
  },
});

export default infoSlice.reducer;
export const {
  clearMessages,
  setMessage,
  setError,
  setShowSideNav,
  setNoShow,
  setShowNotification,
} = infoSlice.actions;
