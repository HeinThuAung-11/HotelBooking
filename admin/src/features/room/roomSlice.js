import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  apiDeleteRoom,
  apiGetAllRooms,
  apiSaveRoom,
  apiUpdateRoom,
} from "./roomAPI";

const initialState = {
  rooms: [],
};
export const fetchRoom = createAsyncThunk(
  "room/fetchRoom",
  async () => {
    const response = await apiGetAllRooms();
    return response.data;
  }
);

export const saveRoom = createAsyncThunk(
  "room/saveRoom",
  async (room) => {
    console.log("room", room);
    const response = await apiSaveRoom(room);
    console.log("response", response);
    return response.data;
  }
);

export const updateRoom = createAsyncThunk(
  "room/updateRoom",
  async (room) => {
    console.log("update room", room);
    const response = await apiUpdateRoom(room, room._id);
    console.log("response", response);
    return response.data;
  }
);
export const deleteRoom = createAsyncThunk(
  "room/deleteRoom",
  async (roomId) => {
    console.log("Delete room", roomId);
    const response = await apiDeleteRoom(roomId);
    console.log("response", response);
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
