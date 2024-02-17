import axios from "axios";
const axiosInstance = axios.create({
  //deploy version of firebase function
  // baseURL: "https://api-abyjie4qeq-uc.a.run.app",


  //local instance of firebase function
  //  baseURL: "http://127.0.0.1:5001/clone-18217/us-central1/api",


  //deployed version of amazon server on render.com
   baseURL: "https://amazon-api-deploy-lxvy.onrender.com/"

});
export { axiosInstance };
