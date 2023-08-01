import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import hotelApi from "../api";

const initialState = {
  users: [],
};
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await hotelApi.get("user");
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(
        "action extra reducer",
        action.payload,
        state.users
      );
      state.users = action.payload;
    });
  },
});
export const getAllUsers = (state) => state.users.users;
export default userSlice.reducer;
