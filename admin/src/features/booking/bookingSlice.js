import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiDeleteBooking, apiGetAllBookings } from "./bookingAPI";

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

export const deleteBooking = createAsyncThunk(
  "booking/deleteBooking",
  async (bookingId) => {
    console.log("NBookng", bookingId);
    const response = await apiDeleteBooking(bookingId);
    if (response.status === 200) {
      return {
        _id: bookingId,
      };
    }
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
    builder.addCase(deleteBooking.fulfilled, (state, action) => {
      state.bookings = state.bookings.filter(
        (booking) => booking._id !== action.payload._id
      );
    });
  },
});
export const getAllBookings = (state) => state.bookings.bookings;
export default bookingSlice.reducer;
