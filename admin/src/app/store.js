import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "../features/room/roomSlice";
import usersReducer from "../features/user/userSlice";
import bookingsReducer from "../features/booking/bookingSlice";
import authReducer from "../features/authSlice";
export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    users: usersReducer,
    bookings: bookingsReducer,
    auth: authReducer,
  },
});
