import plainAxios from "axios";
import { deleteAllCookies } from "./helpers/authHelper";

const axios = plainAxios.create({
  baseURL: "/api/",
  timeout: 5000,
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      deleteAllCookies();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default axios;
