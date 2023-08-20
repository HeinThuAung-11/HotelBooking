import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserById, login, register, saveBooking } from "./authApi";
const initialState = {
  token: localStorage.getItem("userAuthToken") || null,
  user: null,
  status: null,
  booking: null,
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
export const apiRegister = createAsyncThunk(
  "auth/register",
  async (user) => {
    console.log("user", user);
    const response = await register(user);
    console.log("responese", response);
    return response.data;
  }
);

export const apiSaveBooking = createAsyncThunk(
  "auth/booking",
  async (booking) => {
    console.log("booking", booking);
    const response = await saveBooking(booking);
    console.log("responese booking", response);
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
        state.status = "success";
        localStorage.setItem("userAuthToken", action.payload.token);
      }
    });
    builder.addCase(apiRegister.fulfilled, (state, action) => {
      console.log("Api fullfilled ", action.payload);
      if (action.payload.token) {
        state.token = action.payload.token;
        state.status = "success";
        localStorage.setItem("userAuthToken", action.payload.token);
      }
    });
    builder.addCase(apiLogin.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(apiRegister.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(apiGetUser.fulfilled, (state, action) => {
      console.log("Api fullfilled ", action.payload);
      state.user = action.payload;
    });
  },
});
export const { logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
