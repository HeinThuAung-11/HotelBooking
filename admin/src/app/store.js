import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/roomSlice";
import usersReducer from "../features/userSlice";
import bookingsReducer from "../features/bookingSlice";
export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    users: usersReducer,
    bookings: bookingsReducer,
  },
});
