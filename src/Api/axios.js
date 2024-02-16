import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "https://api-abyjie4qeq-uc.a.run.app",
  baseURL: "http://127.0.0.1:5001/clone-18217/us-central1/api",
});
export { axiosInstance };
