import axios from "axios";
import { BASE_URL } from "../constants/urls";
import store from "../store";
import axiosRateLimit from "axios-rate-limit";
import { logoutUser, apiError } from "../store/actions";
class HttpService {
  constructor() {
    const token = window.localStorage.getItem("token");
    const service = axiosRateLimit(
      axios.create({
        baseURL: BASE_URL,
        headers: token
          ? {
              Authorization: `Bearer ${token}`,

              // Authorization: "Token 4d60727de685ac91c7fd0ae92373c4e11af3c2b4",
            }
          : {},
      }),
      {
        maxRequests: 2,
        perMilliseconds: 1000,
      }
    );

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    // service.interceptors.response.use(this.handleSuccess);

    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    switch (error.response.status) {
      case 401:
        store.dispatch(logoutUser());

        store?.dispatch(
          apiError({
            message:
              error?.response?.message || "Token expired,  Please login again!",
          })
        );

        break;

      // break;
      case 403:
        store.dispatch(logoutUser());

        store?.dispatch(
          apiError({
            message:
              error?.response?.message || "Invalid Token, Please login again!",
          })
        );

        break;
      case 404:
        // Not found
        this.redirectTo("/404");
        break;
      default:
        // Internal server error
        // this.redirectTo("/500");

        break;
    }
    return Promise.reject(error);
  }

  redirectTo(url) {
    window.location.href = url;
  }

  get(...args) {
    return this.service.get(...args);
  }

  post(...args) {
    return this.service.post(...args);
  }

  put(...args) {
    return this.service.put(...args);
  }

  patch(...args) {
    return this.service.patch(...args);
  }

  delete(...args) {
    return this.service.delete(...args);
  }
}

export default HttpService;
