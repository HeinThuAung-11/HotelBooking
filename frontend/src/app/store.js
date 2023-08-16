import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/roomSlice";
import authReducer from "../features/authSlice";
export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    auth: authReducer,
  },
});
