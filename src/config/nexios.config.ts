import { Nexios } from "nexios-http";

const nexiosInstance = new Nexios({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  timeout: 10000,
});

export default nexiosInstance;