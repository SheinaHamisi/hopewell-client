import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import { clearMessages, setMessage, setError } from "../info/info.slice";
export const createUser = createAsyncThunk(
  "users/createUser",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.createUserApi(formData);
      // set messages
      console.log({ response });
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (err) {
      thunkAPI.dispatch(
        setError(err.response.data ? err.response.data.message : err.message)
      );
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.loginUserApi(formData);

      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data.results;
    } catch (err) {
      console.log({ err });
      thunkAPI.dispatch(
        setError(err.response.data ? err.response.data.message : err.message)
      );
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const activateUser = createAsyncThunk(
  "users/activate",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const { data } = await api.activateUserApi(formData);
      thunkAPI.dispatch(setMessage(data.message));
      return data.results;
    } catch (err) {
      console.log({ err });
      thunkAPI.dispatch(
        setError(err.response.data ? err.response.data.message : err.message)
      );
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getAccessTokens = createAsyncThunk(
  "users/refreshToken",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.getAccessTokenApi(formData);
      console.log(data);
      return data.acessToken;
    } catch (err) {
      // error log out user
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
