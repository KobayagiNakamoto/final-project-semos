import axios from "axios";

const recipeService = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
  timeout: 5000,
});

export default recipeService;
