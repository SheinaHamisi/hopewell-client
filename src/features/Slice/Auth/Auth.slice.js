import { createSlice } from "@reduxjs/toolkit";
import { loginUser, createUser, getAccessTokens } from "./AuthAsync";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

let userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUserInfo(state) {
      localStorage.clear();
      state.user = null;
    },
  },

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
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

    [getAccessTokens.pending]: (state, action) => {},
    [getAccessTokens.fulfilled]: (state, action) => {
      let userInfo = state.user;
      let acessToken = action.payload;
      userInfo.tokens.accessToken = acessToken;
      localStorage.setItem("user", JSON.stringify(userInfo));
      state.user = userInfo;
    },
    [getAccessTokens.rejected]: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
});

export default userSlice.reducer;

export const { clearUserInfo } = userSlice.actions;
