import { API } from "../../api";
import axios from "../../settings/our_axios";

export function apiGetAllRooms() {
  return axios.get(API + "/room");
}

export function apiSaveRoom(room) {
  return axios.post(API + "/room", room);
}
