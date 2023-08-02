import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetAllBookings } from "./bookingAPI";

const initialState = {
  bookings: [],
};
export const fetchBooking = createAsyncThunk(
  "booking/fetchBooking",
  async () => {
    const response = await apiGetAllBookings();
    return response.data;
  }
);

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooking.fulfilled, (state, action) => {
      state.bookings = action.payload;
    });
  },
});
export const getAllBookings = (state) => state.bookings.bookings;
export default bookingSlice.reducer;
