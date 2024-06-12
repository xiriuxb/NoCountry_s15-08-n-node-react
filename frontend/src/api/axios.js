import axios from "axios";

const appApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5173/api",
});

//Todo: conf interceptors

appApi.interceptors.request.use((config) => {
  config.headers["authorization"] = sessionStorage.getItem("token");
  return config;
});

export default appApi;
