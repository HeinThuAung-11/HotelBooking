import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/roomSlice";
export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});
