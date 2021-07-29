import axios from "axios";

const authService = axios.create({
  baseURL: "http://peronakov.herokuapp.com/user",
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

export async function register(body) {
  try {
    const res = await authService.post("/register", body);
    return [res, null];
  } catch (err) {
    return [null, err];
  }
}
