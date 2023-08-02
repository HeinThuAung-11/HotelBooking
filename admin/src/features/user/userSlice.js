import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetAllUsers } from "./userAPI";

const initialState = {
  users: [],
};
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const response = await apiGetAllUsers();
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
