import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://online-auction-3.onrender.com",
});

// Add a request interceptor to attach token dynamically
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
