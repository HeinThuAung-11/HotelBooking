import { API } from "../../api";
import axios from "../../settings/our_axios";

export function apiGetAllBookings() {
  return axios.get(API + "/booking");
}

export function apiDeleteBooking(bookingId) {
  return axios.delete(API + "/booking/" + bookingId);
}
