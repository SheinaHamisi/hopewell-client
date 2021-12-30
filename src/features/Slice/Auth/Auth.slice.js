import { createSlice } from "@reduxjs/toolkit";
import { loginUser, createUser } from "./AuthAsync";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

let userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateToken: (state, action) => {
      state.user.tokens.accessToken = action.payload;
      state.updated = true;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(action?.payload?.tokens?.refreshToken)
      );
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action?.payload?.tokens?.accessToken)
      );
      state.user = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      localStorage.clear();
      state.user = null;
    },

    // on register

    [createUser.pending]: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
    [createUser.rejected]: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
});

export default userSlice.reducer;

export const { updateToken } = userSlice.actions;
