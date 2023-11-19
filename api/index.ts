import axios from "axios";
import { BASE_URL_API } from "../constants/config";

const instance = axios.create({
  baseURL: BASE_URL_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
