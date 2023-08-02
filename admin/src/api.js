import axios from "./settings/our_axios";

const hotelApi = axios.create({
  baseURL: "http://localhost:3001/api/admin",
});

export const API = "http://localhost:3001/api/admin";
export default hotelApi;
