import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import hotelApi from "../api";

const initialState = {
  bookings: [],
};
export const fetchBooking = createAsyncThunk(
  "booking/fetchBooking",
  async () => {
    const response = await hotelApi.get("booking");
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
