import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { logout, refreshUser, register, login } from "./operations";

const INITIAL_STATE = {
   user: {
    name: null,
    email: null,
   },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    isError: false,
  }

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
      builder
        .addCase(register.fulfilled, (state, action) => {
          state.isLoggedIn = true
          state.isLoading = false;
          state.user = action.payload.user
          state.token = action.payload.token
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoggedIn = true
          state.isLoading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
        })
        .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true
          state.isError = false;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.isRefreshing = false
          state.user = action.payload
          state.isLoggedIn = true
        })
        .addCase(refreshUser.rejected, (state) => {
          state.isRefreshing = false;
          state.isError = true;
        })
        .addCase(logout.fulfilled, () => {
          return INITIAL_STATE
        })
        .addMatcher(isAnyOf(login.pending, register.pending , logout.pending), (state) => {
          state.isLoading = true
          state.isError = false
        })
        .addMatcher(isAnyOf(login.rejected, register.rejected , logout.rejected), (state) => {
            state.isLoading = false
            state.isError = true
        })
    },
  });

  export const authReducer = authSlice.reducer;