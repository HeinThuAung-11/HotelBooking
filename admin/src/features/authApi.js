import axios from "../settings/our_axios";
export function login(email, password) {
  const loginUrl = "http://localhost:3001/api/admin/login";
  console.log("loginfunc", email, password);
  return axios.post(loginUrl, {
    email,
    password,
  });
}
