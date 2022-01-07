import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import { clearMessages, setMessage, setError } from "../info/info.slice";

export const getServiceType = createAsyncThunk(
  "apointment/getServiceTypes",

  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());

    try {
      const response = await api.getServiceTypesApi();
      thunkAPI.dispatch(setMessage(response.data.message));
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      thunkAPI.dispatch(
        setError(err.response.data ? err.response.data.message : err.message)
      );
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
