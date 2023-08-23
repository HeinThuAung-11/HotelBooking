import axios from "../settings/our_axios";
const bookingUrl = "http://localhost:3001/api/bookings/";

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
  return axios.post(bookingUrl, booking);
}

export function getBookingByUserId(userId) {
  return axios.get(bookingUrl + userId);
}
export function deleteBookingById(userId) {
  console.log("frotend final", userId);
  return axios.delete(bookingUrl + userId);
}
export function updateBookingById(bookingId, bookingData) {
  return axios.put(bookingUrl + bookingId, bookingData);
}
