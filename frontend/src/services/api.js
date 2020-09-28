import axios from "axios";

axios.defaults.withCredentials = true
const api = axios.create({
  baseURL: "http://0.0.0.0:3001",
});

export default api;