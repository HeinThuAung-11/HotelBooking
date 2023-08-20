import axios from "../settings/our_axios";
export function login(email, password) {
  const loginUrl = "http://localhost:3001/api/users/login";
  console.log("Final", email, password);
  return axios.post(loginUrl, {
    email,
    password,
  });
}
export function register(user) {
  const registerUrl = "http://localhost:3001/api/users/";
  console.log("Final", user);
  return axios.post(registerUrl, user);
}
export function getUserById(userId) {
  const loginUrl = "http://localhost:3001/api/users/";
  return axios.get(loginUrl + userId);
}

export function saveBooking(booking) {
  const bookingUrl = "http://localhost:3001/api/bookings/";
  return axios.post(bookingUrl, booking);
}
