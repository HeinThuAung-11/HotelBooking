import { API } from "../../api";
import axios from "../../settings/our_axios";

export function apiGetAllRooms() {
  return axios.get(API + "/room");
}
