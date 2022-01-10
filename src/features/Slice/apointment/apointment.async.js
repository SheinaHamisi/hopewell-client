import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api";
import { clearMessages, setMessage, setError } from "../info/info.slice";

export const getlockPrice = createAsyncThunk(
  "apointment/getlockPrice",

  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());

    try {
      const response = await api.getServiceTypesApi();
      // thunkAPI.dispatch(setMessage(response.data.message));

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

//===================================================================== admin
export const createLockPrice = createAsyncThunk(
  "apointment/createLockPrice",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.createLockPriceApi(formData);
      thunkAPI.dispatch(setMessage(response.data.message));
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

export const getOneLockPrice = createAsyncThunk(
  "apointment/getOneLockPrice",
  async (id, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.getOneLockPriceApi(id);
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

export const updateLockPrice = createAsyncThunk(
  "apointment/updateLockPrice",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());

    try {
      const response = await api.updateLockPriceApi(formData);
      thunkAPI.dispatch(setMessage(response.data.message));
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

export const deleteLocPrice = createAsyncThunk(
  "apointment/deleteLocPrice",
  async (id, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.deleteLocPriceAPI(id);
      thunkAPI.dispatch(setMessage(response.data.message));
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

export const getAllServices = createAsyncThunk(
  "apointment/getAllServices",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.getAllServicesApi();
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

export const createService = createAsyncThunk(
  "apointment/createService",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.createServiceApi(formData);
      thunkAPI.dispatch(setMessage(response.data.message));
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

export const getOneService = createAsyncThunk(
  "apointment/getOneService",
  async (id, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());

    try {
      const response = await api.getOneServiceApi(id);
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

export const updateService = createAsyncThunk(
  "apointment/updateService",
  async (formData, thunkAPI) => {
    // clear Messages
    thunkAPI.dispatch(clearMessages());
    try {
      const response = await api.updateServiceApi(formData);
      thunkAPI.dispatch(setMessage(response.data.message));
      console.log(response);
    } catch (err) {
      console.log(err);
      thunkAPI.dispatch(
        setError(err.response.data ? err.response.data.message : err.message)
      );
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
