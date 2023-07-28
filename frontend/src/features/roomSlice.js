import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import hotelApi from "../api";

const initialState = {
  rooms: [],
};
export const fetchRoom = createAsyncThunk(
  "room/fetchRoom",
  async () => {
    const response = await hotelApi.get("rooms");
    return response.data;
  }
);

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoom.fulfilled, (state, action) => {
      console.log(
        "action extra reducer",
        action.payload,
        state.rooms
      );
      state.rooms = action.payload;
    });
  },
});
export const getAllRooms = (state) => state.rooms.rooms;
export default roomSlice.reducer;
