// import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
// const token = localStorage.getItem("token")?.replace(/"/g, "") as string;

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// api.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     config.headers!.Authorization = token;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// api.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response;
//   },
//   (error) => {
//     const code = error && error.response ? error.response.status : 0;
//     if (code === 401 || code === 403) {
//       if (window.location.pathname !== "/auth/login") {
//         window.location.href = "/auth/login";
//       }
//     }

//     if (
//       error.request.responseType === "blob" &&
//       error.response.data instanceof Blob &&
//       error.response.data.type &&
//       error.response.data.type.toLowerCase().indexOf("json") != -1
//     ) {
//       return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//           error.response.data = JSON.parse(reader.result as string);
//           resolve(Promise.reject(error));
//         };

//         reader.onerror = () => {
//           reject(error);
//         };

//         reader.readAsText(error.response.data);
//       });
//     }
//     return Promise.reject(error);
//   },
// );