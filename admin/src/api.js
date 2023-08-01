import axios from "axios";

const hotelApi = axios.create({
  baseURL: "http://localhost:3001/api/admin",
});

export default hotelApi;
