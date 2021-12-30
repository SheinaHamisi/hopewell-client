import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../Auth/AuthAsync";

export const initialState = {
  loading: false,
  message: null,
  error: null,
  success: null,
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
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
export const { clearMessages, setMessage, setError } = infoSlice.actions;
