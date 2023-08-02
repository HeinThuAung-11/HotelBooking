import { API } from "../../api";
import axios from "../../settings/our_axios";

export function apiGetAllBookings() {
  return axios.get(API + "/booking");
}
