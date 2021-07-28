import axios from "axios";

const authService = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
  timeout: 5000,
});

export async function login(body) {
  try {
    const res = await authService.post("/login", body);
    return [res, null];
  } catch (err) {
    return [null, err];
  }
}
