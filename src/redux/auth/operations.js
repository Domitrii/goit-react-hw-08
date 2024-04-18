import { createAsyncThunk } from "@reduxjs/toolkit";
import 
{ requestGetCurrentUser,
  requestLogOut,
  requestSignIn, 
  requestSignUp } from "../../services/authServices";




export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkAPI) => {
      try {
        const data = await requestSignUp(formData);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const login = createAsyncThunk(
    "auth/login",
    async (formData, thunkAPI) => {
      try {
        const data = await requestSignIn(formData);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const logout = createAsyncThunk(
    "auth/logout",
    async (thunkAPI) => {
      try {
        const data = await requestLogOut();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (token === null) {
        return thunkAPI.rejectWithValue("Unable to fetch user");
      }
      try {
        setToken(token);
        const data = await requestGetCurrentUser();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );