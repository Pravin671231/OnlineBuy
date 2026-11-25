import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.groupCollapsed(
      `🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`
    );

    console.log("Base URL:", config.baseURL);
    console.log("Headers:", config.headers);
    console.log("Params:", config.params);
    console.log("Data:", config.data);

    console.groupEnd();

    return config;
  },
  (error) => {
    console.groupCollapsed("❌ Request Error");
    console.error(error);
    console.groupEnd();

    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.groupCollapsed(
      `✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`
    );

    console.log("Status:", response.status);
    console.log("Response Data:", response.data);
    console.log("Headers:", response.headers);

    console.groupEnd();

    return response;
  },
  (error) => {
    console.groupCollapsed(
      `❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`
    );

    console.log("Status:", error.response?.status);
    console.log("Error Data:", error.response?.data);
    console.error("Error:", error.message);

    console.groupEnd();

    return Promise.reject(error);
  }
);

export default api;