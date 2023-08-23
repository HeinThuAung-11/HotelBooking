import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import hotelApi from "../api";

const initialState = {
  rooms: [],
  filteredRooms: [],
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
  reducers: {
    filteringRooms: (state, action) => {
      console.log("filtering roonms", state, action);
      state.filteredRooms = action.payload;
    },
    cancelFilteredRooms: (state) => {
      state.filteredRooms = [];
    },
  },
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
export const getFilteredRooms = (state) => state.rooms.filteredRooms;
export const { filteringRooms, cancelFilteredRooms } =
  roomSlice.actions;
export default roomSlice.reducer;
