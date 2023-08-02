import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "./authApi";
const initialState = {
  token: localStorage.getItem("authToken") || null,
};
export const apiLogin = createAsyncThunk(
  "auth/login",
  async (user) => {
    const response = await login(user.email, user.password);
    console.log("login user json ", response.data);
    return response.data;
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = undefined;
      console.log("LOGOUT ");
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiLogin.fulfilled, (state, action) => {
      console.log("Api fullfilled ", action.payload);
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("authToken", action.payload.token);
      }
    });
  },
});
export const { logout } = authSlice.actions;
export const selectAuth = (state) => state.auth.token;
export default authSlice.reducer;
