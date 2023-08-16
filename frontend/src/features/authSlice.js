import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById, login } from "./authApi";
const initialState = {
  token: localStorage.getItem("userAuthToken") || null,
  user: null,
};
export const apiLogin = createAsyncThunk(
  "auth/login",
  async (user) => {
    const response = await login(user.email, user.password);
    console.log("responese", response);
    return response.data;
  }
);

export const apiGetUser = createAsyncThunk(
  "auth/user",
  async (userId) => {
    console.log("userid", userId);
    const response = await getUserById(userId.id);
    console.log("responese", response);
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
      localStorage.removeItem("userAuthToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiLogin.fulfilled, (state, action) => {
      console.log("Api fullfilled ", action.payload);
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("userAuthToken", action.payload.token);
      }
    });
    builder.addCase(apiGetUser.fulfilled, (state, action) => {
      console.log("Api fullfilled ", action.payload);
      state.user = action.payload;
    });
  },
});
export const { logout } = authSlice.actions;
export const selectAuth = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
