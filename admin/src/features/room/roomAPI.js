import { API } from "../../api";
import axios from "../../settings/our_axios";

export function apiGetAllRooms() {
  return axios.get(API + "/room");
}

export function apiSaveRoom(room) {
  return axios.post(API + "/room", room);
}

export function apiUpdateRoom(room, roomId) {
  console.log("Apiupdateroom", roomId, room);
  return axios.put(API + "/room/" + roomId, room);
}
export function apiDeleteRoom(roomId) {
  console.log("ApiDeleteroom", roomId);
  return axios.delete(API + "/room/" + roomId);
}
