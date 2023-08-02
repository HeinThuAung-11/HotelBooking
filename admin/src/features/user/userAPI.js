import { API } from "../../api";
import axios from "../../settings/our_axios";

export function apiGetAllUsers() {
  return axios.get(API + "/user");
}
